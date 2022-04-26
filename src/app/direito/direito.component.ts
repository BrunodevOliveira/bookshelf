import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Direito } from '../modelosInterface/direito';
import { DireitoService } from '../servicosInterface/direito.service';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss']
})
export class DireitoComponent implements OnInit {

  livrosDireito$: Observable <Direito[]>;
  visaoColunas=['_idDireito','tituloDireito','autorDireito','isbnDireito','editoraDireito','anoDireito'];

  constructor(
    private direitoService: DireitoService,
    public dialogo: MatDialog
  ) {
    this.livrosDireito$ = direitoService.listagemDireito()
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
