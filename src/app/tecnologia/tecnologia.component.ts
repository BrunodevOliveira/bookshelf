import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Tecnologia } from '../modelosInterface/tecnologia';
import { TecnologiaService } from '../servicosInterface/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  livrosTecnologia$: Observable <Tecnologia[]>;
  visaoColunas=['_idTecnologia','tituloTecnologia','autorTecnologia','isbnTecnologia','editoraTecnologia','anoTecnologia'];

  constructor(
    private tecnologiaService: TecnologiaService,
    public dialogo: MatDialog
  ) {
    this.livrosTecnologia$ = tecnologiaService.listagemTecnologia()
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
