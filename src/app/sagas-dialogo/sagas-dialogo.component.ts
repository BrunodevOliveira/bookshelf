import { SagasDialogo } from './../modelosInterface/sagas-dialogo';
import { SagasDialogoService } from './../servicosInterface/sagas-dialogo.service';
import { Observable, of } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-sagas-dialogo',
  templateUrl: './sagas-dialogo.component.html',
  styleUrls: ['./sagas-dialogo.component.scss']
})
export class SagasDialogoComponent {

  livros$!: Observable<SagasDialogo[]>;

  constructor(
    private sagasDialogoService: SagasDialogoService,

    @Inject(MAT_DIALOG_DATA) public livros: SagasDialogo[]) {

      this.livros$ = of (livros)
     }
}
