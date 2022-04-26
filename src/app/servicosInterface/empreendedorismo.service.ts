import { Empreendedorismo } from './../modelosInterface/empreendedorismo';
import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorismoService {

  private readonly urlAPI = "/assets/empreendedorismo.json";

  constructor(private livrosEmpreendedorismo: HttpClient) { }

  listagemEmpreendedorismo() {
    return this.livrosEmpreendedorismo.get<Empreendedorismo[]>(this.urlAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiEmpreendedorismo => console.log(apiEmpreendedorismo))
    )
  }
}
