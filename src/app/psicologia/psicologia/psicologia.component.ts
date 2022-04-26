import { PsicologiaService } from './../../servicosInterface/psicologia.service';
import { InterfacePsicologia } from './../../modelosInterface/interface-psicologia';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss']
})
export class PsicologiaComponent implements OnInit {

  livrosPsicologia$: Observable <InterfacePsicologia[]>;
  visaoColunas=['_idPsicologia','tituloPsicologia','autorPsicologia','isbnPsicologia','editoraPsicologia','anoPsicologia'];

  constructor(
    private psicologiaService: PsicologiaService,
    public dialogo: MatDialog
    ) {
    this.livrosPsicologia$ = psicologiaService.listagemGeneros()
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
