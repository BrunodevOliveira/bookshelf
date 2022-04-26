import { Tecnologia } from './../modelosInterface/tecnologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private readonly uriAPI = '../../assets/tecnologia.json';

  constructor(private listaTec: HttpClient) { }

  listagemTecnologia() {
    return this.listaTec.get<Tecnologia[]>(this.uriAPI)
    .pipe (
      first(),
      delay(500),
      tap(apiTecnologia => console.log(apiTecnologia))
    )
  }
}
