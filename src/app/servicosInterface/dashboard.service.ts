import { map, filter } from 'rxjs/operators';
import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly uriAPI='../../assets/dashboard.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      delay(500),
      first(),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }

  search(titulo: string){
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      delay(200),
      map(res => res.filter(i => (i.titulo.toLowerCase()).startsWith(titulo.toLowerCase()))),
      )
    }
  }


