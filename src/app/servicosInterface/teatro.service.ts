import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Teatro } from './../modelosInterface/teatro';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {

  private readonly urlAPI = '/assets/teatro.json';

  constructor(private clienteDados: HttpClient) { }

  listagemTeatro() {
    return this.clienteDados.get<Teatro[]>(this.urlAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiTeatro => console.log(apiTeatro))
    )
  }
}
