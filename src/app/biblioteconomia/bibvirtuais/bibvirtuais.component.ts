import { AutenticacaoFirebaseService } from './../../servicosInterface/autenticacao-firebase.service';
import { BibvirtuaisService } from './../services/bibvirtuais.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable, catchError, of } from 'rxjs';
import { BibliotecasVirtuais } from './../modelos/bibvirtual';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibvirtuais',
  templateUrl: './bibvirtuais.component.html',
  styleUrls: ['./bibvirtuais.component.scss']
})
export class BibvirtuaisComponent {

  cards$: Observable<BibliotecasVirtuais[]>;
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
    private bibvirtuaisService: BibvirtuaisService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = bibvirtuaisService.listagemCards()
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
