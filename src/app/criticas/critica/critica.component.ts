import { Critica } from './../modelos/critica';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, tap } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CriticaService } from '../service/critica.service';
import { CriticaDialogoComponent } from '../critica-dialogo/critica-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-critica',
  templateUrl: './critica.component.html',
  styleUrls: ['./critica.component.scss']
})
export class CriticaComponent {

  criticas$: Observable<Critica[]>;
  result$?: Observable<Critica[]>
  value!: string;
  breakpoint!: number;

  criticas= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.criticas$;
      }
      return this.criticas$;
    })
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private criticaService: CriticaService,
    private telaCriticas: MatDialog
  ) {
    this.criticas$ = criticaService.listagemCriticas()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
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
          this.result$ = this.criticaService.pesquisar(query)
          console.log(this.result$)
        } else {
          this.result$ = undefined
        }
      })
    ).subscribe()
  }

  abrirCriticas(resenha: string){
    this.telaCriticas.open(CriticaDialogoComponent,{
      data: resenha
    })
  }

  handleSize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
}
