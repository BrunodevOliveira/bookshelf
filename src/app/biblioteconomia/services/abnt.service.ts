import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { ABNT } from './../modelos/abnt';

@Injectable({
  providedIn: 'root'
})
export class AbntService {

  private readonly uriAPI='../../assets/abnt.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<ABNT[]>(this.uriAPI)
    .pipe(
      delay(500),
      first(),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }
}
