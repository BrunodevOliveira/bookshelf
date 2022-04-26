import { MatDialog } from '@angular/material/dialog';
import { Sagas } from './../modelosInterface/sagas';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { catchError, fromEvent, Observable,filter, debounceTime, distinctUntilChanged, tap, of } from 'rxjs';
import { SagasService } from '../servicosInterface/sagas.service';
import { map } from 'rxjs/operators';
import { SagasDialogoComponent } from '../sagas-dialogo/sagas-dialogo.component';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.scss']
})
export class SagasComponent implements AfterViewInit {

  sagas$: Observable<Sagas[]>;
  result$?: Observable<Sagas[]>
  value!: string;
  breakpoint!: number;

  sagas= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.sagas$;
      }
      return this.sagas$;
    })
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sagasService: SagasService,
    private telaSagas: MatDialog
  ) {
    this.sagas$ = sagasService.listagemSagas()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
  }

  @ViewChild('searchInput') searchInput!: ElementRef

  ngAfterViewInit(): void {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
        const query = this.searchInput.nativeElement.value
        // console.log(query)
        if(query) {
          this.result$ = this.sagasService.pesquisar(query)
          console.log(this.result$)
        } else {
          this.result$ = undefined
        }
      })
    ).subscribe()
  }

  handleSize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
    }

  abrirSagas(livros: [{nome:string}]){
    this.telaSagas.open(SagasDialogoComponent,{
      data: livros
    })
  }
}
