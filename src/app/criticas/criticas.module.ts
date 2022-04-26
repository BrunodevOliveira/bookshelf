import { CriticaDialogoComponent } from './critica-dialogo/critica-dialogo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticasRoutingModule } from './criticas-routing.module';
import { CriticaComponent } from './critica/critica.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from '../app-compartilhado/app-compartilhado.module';


@NgModule({
  declarations: [
    CriticaComponent,
    CriticaDialogoComponent
  ],
  imports: [
    CommonModule,
    CriticasRoutingModule,
    AppCompartilhadoModule,
    AppMaterialModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule
  ]
})
export class CriticasModule { }
