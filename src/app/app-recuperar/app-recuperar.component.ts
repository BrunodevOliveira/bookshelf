import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-recuperar',
  templateUrl: './app-recuperar.component.html',
  styleUrls: ['./app-recuperar.component.scss']
})
export class AppRecuperarComponent implements OnInit {
  formularioLogin = this.recuperarBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email])
  });

  constructor(private dialog: MatDialog,
    private Auth: AutenticacaoFirebaseService,
    private recuperarBuilder: FormBuilder,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
    if(this.dialog){
      this.dialog.closeAll();
    }
  }

  get email(){
    return this.formularioLogin.get('email');
  }

  esqueciSenha(){
    if(this.formularioLogin.valid){
      const {email} = this.formularioLogin.value;
      this.Auth.recuperarSenha(email)
      .subscribe({
        next: () => {
          this.toast.success('Enviado! Confira seu email!')
        },
        error: (err) => {
          this.toast.error('Email informado não encontrado!')
        }
      })
    }
  }

}
