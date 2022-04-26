import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Reportagem } from './../modelosInterface/reportagem';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { ReportagemService } from './../servicosInterface/reportagem.service';

@Component({
  selector: 'app-reportagem',
  templateUrl: './reportagem.component.html',
  styleUrls: ['./reportagem.component.scss']
})
export class ReportagemComponent {

  reportagem$: Observable<Reportagem[]>;
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  breakpoint!: number;
  reportagens= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.reportagem$;
      }
      return this.reportagem$;
    })
  );

  constructor (
    private breakpointObserver: BreakpointObserver,
    private reportagemService: ReportagemService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.reportagem$ = reportagemService.listagemReportagem()
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
