import { Critica } from './../modelos/critica';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriticaDialogoService {

  private readonly uriApi ="../../assets/critica.json"

  constructor(private criticasDashboard: HttpClient) { }

  listagemCriticas () {
    return this.criticasDashboard.get<Critica[]>(this.uriApi)
    .pipe(
      first(),
      tap(apiCriticas => console.log(apiCriticas))
    )
  }
}
