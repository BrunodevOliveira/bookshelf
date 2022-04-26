import { Teatro } from './../../modelosInterface/teatro';
import { TeatroService } from './../../servicosInterface/teatro.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent implements OnInit {

  livrosTeatro$: Observable <Teatro[]>;
  visaoColunas=['_idTeatro','tituloTeatro','autorTeatro','isbnTeatro','editoraTeatro','anoTeatro'];

  constructor(
    private teatroService: TeatroService,
    public dialogo: MatDialog
    ) {
    this.livrosTeatro$ = teatroService.listagemTeatro()
    .pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
  }
  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }
}
