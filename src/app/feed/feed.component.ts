import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Dashboard } from './../modelosInterface/dashboard';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of, fromEvent } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit{
  results$?: Observable<Dashboard[]>;
  value!: string;
  formulario!: FormGroup;
  cards$: Observable<Dashboard[]>;
  breakpoint!: number;
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  @ViewChild('searchInput') searchInput!: ElementRef

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    this.formulario = new FormGroup({
      titulo: new FormControl('')
    })
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }

    ngAfterViewInit(): void {
      console.log(this.searchInput)
      fromEvent(this.searchInput.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(400),
          distinctUntilChanged(),
          tap(() => {
            const titulo = this.searchInput.nativeElement.value;
            console.log(titulo)
            if (titulo) {
              this.results$ = this.dashboardService.search(titulo);
            } else {
              this.results$ = undefined;
            }
          })
        )
        .subscribe();
    }

    handleSize(event: any) {
      this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
      }

}
