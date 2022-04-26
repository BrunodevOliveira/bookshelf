import { Sugestoes } from './../modelosInterface/sugestoes';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { catchError, fromEvent, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';


import { SugestoesService } from '../servicosInterface/sugestoes.service';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent {

  cards$: Observable <Sugestoes[]>;
  result$?: Observable<Sugestoes[]>
  value!: string;
  breakpoint!: number;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sugestoesService: SugestoesService,
  ) {
    this.cards$ = sugestoesService.listagemSugestoes()
    .pipe(
      catchError(error =>{
        return of([])
      })
    );
  }

  @ViewChild('searchInput') searchInput!: ElementRef

  ngAfterViewInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
        const query = this.searchInput.nativeElement.value
        // console.log(query)
        if(query) {
          this.result$ = this.sugestoesService.pesquisar(query)
          console.log(this.result$)
        } else {
          this.result$ = undefined
        }
      })
    ).subscribe()
  }

  handleSize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
}
