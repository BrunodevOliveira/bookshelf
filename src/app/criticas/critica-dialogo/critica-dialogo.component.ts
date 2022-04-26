import { Critica } from './../modelos/critica';
import { Component, Inject, OnInit } from '@angular/core';
import { CriticaDialogoService } from '../service/critica-dialogo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-critica-dialogo',
  templateUrl: './critica-dialogo.component.html',
  styleUrls: ['./critica-dialogo.component.scss']
})
export class CriticaDialogoComponent {

  resenhas$!: Observable<Critica[]>;

  constructor(
    private criticaDialogoService: CriticaDialogoService,

    @Inject(MAT_DIALOG_DATA) public resenhas: Critica[]
  ) {
    this.resenhas$ = of (resenhas)
  }
}
