import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { BaseDados } from './../modelos/basedados';

@Injectable({
  providedIn: 'root'
})
export class BasedadosService {

  private readonly uriAPI='../../assets/basedados.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<BaseDados[]>(this.uriAPI)
    .pipe(
      delay(500),
      first(),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }
}
