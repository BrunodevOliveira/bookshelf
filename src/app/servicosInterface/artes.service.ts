import { Artes } from './../modelosInterface/artes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtesService {

  private readonly uriAPI = '../../assets/artes.json';
  constructor(private listaArtes: HttpClient) { }

  listagemArtes() {
    return this.listaArtes.get<Artes[]>(this.uriAPI)
    .pipe (
      first(),
      delay(500),
      tap(apiArtes => console.log(apiArtes))
    )
  }
}












