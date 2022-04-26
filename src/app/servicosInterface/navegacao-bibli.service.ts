import { first, tap } from 'rxjs';
import { BibliNavegador } from './../modelosInterface/bibliNavegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoBibliService {

  private readonly uriAPI='../../assets/bibliNavegador.json';

  constructor(private menuDados: HttpClient) { }

  listagemMenu(){
    return this.menuDados.get<BibliNavegador[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiMenu => apiMenu)
    )
  }
}
