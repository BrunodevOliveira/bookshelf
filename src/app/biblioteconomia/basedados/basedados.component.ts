import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AutenticacaoFirebaseService } from './../../servicosInterface/autenticacao-firebase.service';
import { BaseDados } from './../modelos/basedados';
import { BasedadosService } from './../services/basedados.service';

@Component({
  selector: 'app-basedados',
  templateUrl: './basedados.component.html',
  styleUrls: ['./basedados.component.scss']
})
export class BasedadosComponent {

  cards$: Observable<BaseDados[]>;
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private basedadosService: BasedadosService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = basedadosService.listagemCards()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }

    ngOnInit(): void {
      this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    }

    handleSize(event: any) {
      this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
      }
}
