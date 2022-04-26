import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Artes } from '../modelosInterface/artes';
import { ArtesService } from '../servicosInterface/artes.service';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.scss']
})
export class ArtesComponent implements OnInit {

  livrosArtes$: Observable <Artes[]>;
  visaoColunas=['_idArtes','tituloArtes','autorArtes','isbnArtes','editoraArtes','anoArtes'];

  constructor(
    private artesService: ArtesService,
    public dialogo: MatDialog
  ) {
    this.livrosArtes$ = artesService.listagemArtes()
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
