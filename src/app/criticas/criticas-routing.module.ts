import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriticaDialogoComponent } from './critica-dialogo/critica-dialogo.component';
import { CriticaComponent } from './critica/critica.component';

const routes: Routes = [
  {
    path:'critica', component:CriticaComponent
  },
  {
    path:'critica-dialogo', component:CriticaDialogoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticasRoutingModule { }
