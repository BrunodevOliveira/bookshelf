import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpreendedorismoService } from './../servicosInterface/empreendedorismo.service';
import { Observable, catchError, of } from 'rxjs';
import { Empreendedorismo } from './../modelosInterface/empreendedorismo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.scss']
})
export class EmpreendedorismoComponent implements OnInit {

  livrosEmpreendedorismo$: Observable<Empreendedorismo[]>;
  visaoColunas=['_idEmpreendedorismo','tituloEmpreendedorismo','autorEmpreendedorismo','isbnEmpreendedorismo','editoraEmpreendedorismo','anoEmpreendedorismo'];

  constructor(
    private empreendedorismoService: EmpreendedorismoService,
    public dialogo: MatDialog
  ) {
    this.livrosEmpreendedorismo$ = empreendedorismoService.listagemEmpreendedorismo()
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
