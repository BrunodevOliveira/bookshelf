import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppMaterialModule } from './../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { BibvirtuaisComponent } from './bibvirtuais/bibvirtuais.component';
import { BiblioteconomiaRoutingModule } from './biblioteconomia-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasedadosComponent } from './basedados/basedados.component';
import { AbntComponent } from './abnt/abnt.component';
import { IsbnComponent } from './isbn/isbn.component';



@NgModule({
  declarations: [
    BasedadosComponent,
    AbntComponent,
    BibvirtuaisComponent,
    IsbnComponent
  ],
  imports: [
    CommonModule,
    BiblioteconomiaRoutingModule,
    AppCompartilhadoModule,
    AppMaterialModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule
  ]
})
export class BiblioteconomiaModule { }
