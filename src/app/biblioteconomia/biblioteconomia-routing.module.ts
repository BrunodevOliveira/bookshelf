import { IsbnComponent } from './isbn/isbn.component';
import { AbntComponent } from './abnt/abnt.component';
import { BasedadosComponent } from './basedados/basedados.component';
import { BibvirtuaisComponent } from './bibvirtuais/bibvirtuais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'bibvirtuais', component:BibvirtuaisComponent
  },
  {
    path:'basedados', component:BasedadosComponent
  },
  {
    path:'abnt', component:AbntComponent
  },
  {
    path:'isbn', component:IsbnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblioteconomiaRoutingModule {}
