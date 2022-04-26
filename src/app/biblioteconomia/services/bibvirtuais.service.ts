import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { BibliotecasVirtuais } from './../modelos/bibvirtual';

@Injectable({
  providedIn: 'root'
})
export class BibvirtuaisService {

  private readonly uriAPI='../../assets/bibvirtuais.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<BibliotecasVirtuais[]>(this.uriAPI)
    .pipe(
      delay(500),
      first(),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }
}
