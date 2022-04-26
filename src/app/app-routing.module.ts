import { AjudaComponent } from './ajuda/ajuda.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { AppRecuperarComponent } from './app-recuperar/app-recuperar.component';
import { TeatroComponent } from './teatro/teatro/teatro.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { ReportagemComponent } from './reportagem/reportagem.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { PsicologiaComponent } from './psicologia/psicologia/psicologia.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ArtesComponent } from './artes/artes.component';
import { DireitoComponent } from './direito/direito.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { SagasComponent } from './sagas/sagas.component';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'feed'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'reportagem', component: ReportagemComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'psicologia', component: PsicologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'tecnologia', component: TecnologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'artes', component: ArtesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'teatro', component: TeatroComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'empreendedorismo', component: EmpreendedorismoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'direito', component: DireitoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'perfil', component: PerfilComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sugestoes', component: SugestoesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sagas', component: SagasComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'duvidas', component: DuvidasComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'ajuda', component: AjudaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'recuperar', component: AppRecuperarComponent,

  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'biblioteconomia',
    loadChildren: () => import('./biblioteconomia/biblioteconomia.module').then(c => c.BiblioteconomiaModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'criticas',
    loadChildren: () => import('./criticas/criticas.module').then(c => c.CriticasModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path:'**',
    component: AppNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
