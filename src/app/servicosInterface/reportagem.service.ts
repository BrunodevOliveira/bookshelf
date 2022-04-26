import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Reportagem } from './../modelosInterface/reportagem';

@Injectable({
  providedIn: 'root'
})
export class ReportagemService {

  private readonly uriApi ="../../assets/reportagem.json"

  constructor( private reportagemDashboard: HttpClient) {}

  listagemReportagem () {
    return this.reportagemDashboard.get<Reportagem[]>(this.uriApi)
    .pipe(
      first(),
      tap(apiReportagem => console.log(apiReportagem))

    )
  }
}
