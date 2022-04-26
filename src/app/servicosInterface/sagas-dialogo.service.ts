import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Sagas } from '../modelosInterface/sagas';

@Injectable({
  providedIn: 'root'
})
export class SagasDialogoService {

  private readonly uriApi ="../../assets/sagas.json"

  constructor(private sagasDashboard: HttpClient) { }

  listagemLivros () {
    return this.sagasDashboard.get<Sagas[]>(this.uriApi)
    .pipe(
      first(),
      tap(apiSagas => console.log(apiSagas))
    )
  }
}
