import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LivrosNavegador } from './../modelosInterface/livrosNavegador';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoLivrosService {

  private readonly uriAPI='../../assets/livrosNavegador.json';

  constructor(private menuDados: HttpClient) { }

  listagemMenu(){
    return this.menuDados.get<LivrosNavegador[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiMenu => apiMenu)
    )
  }
}
