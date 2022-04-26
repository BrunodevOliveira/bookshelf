import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, tap } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { Generos } from './../modelos/generos';
import { GenerosService } from './../service/generos.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit, AfterViewInit {

  livrosGeneros$: Observable <Generos[]>;
  visaoColunas=['_idGenero','nomeGenero','decimalGenero'];
  formulario!: FormGroup
  result$?: Observable<Generos[]>
  value!: string;

  constructor(
    private generosService: GenerosService,
    public dialogo: MatDialog
    ) {
    this.livrosGeneros$ = generosService.listagemGeneros()
    .pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
  }

  @ViewChild('searchInput') searchInput!: ElementRef

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
        const query = this.searchInput.nativeElement.value
        // console.log(query)
        if(query) {
          this.result$ = this.generosService.pesquisar(query)
        } else {
          this.result$ = undefined
        }
      })
    ).subscribe()
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      genero: new FormControl('')
    })
  }
}
