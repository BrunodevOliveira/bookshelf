import { InterfacePsicologia } from './../modelosInterface/interface-psicologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

  private readonly urlAPI = '/assets/psicologia.json';

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<InterfacePsicologia[]>(this.urlAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiPsicologia => console.log(apiPsicologia))
    )
  }
}
