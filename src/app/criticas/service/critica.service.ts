import { Critica } from './../modelos/critica';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriticaService {

  private readonly uriApi ="../../assets/critica.json"

  constructor(private criticasDashboard: HttpClient) { }
  listagemCriticas () {
    return this.criticasDashboard.get<Critica[]>(this.uriApi)
    .pipe(
      first(),
      tap(apiCriticas => console.log(apiCriticas))
    )
  }

  pesquisar(titulo: string){
    return this.criticasDashboard.get<Critica[]>(this.uriApi)
    .pipe(
      first(),
      delay(200),
      map(res => res.filter(i => (i.titulo.toLowerCase()).startsWith(titulo.toLowerCase()))),
    )
  }
}
