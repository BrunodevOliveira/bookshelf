import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;

  constructor(private autenticacaoFirebaseService: AutenticacaoFirebaseService) { }

  ngOnInit(): void {
  }

}
