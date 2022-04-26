import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirmaSenha = control.get('confirmaSenha')?.value;

    if(senha && confirmaSenha && senha !== confirmaSenha){
      return {
        senhasDiferentes: true
      }

    }
  return null;
  }
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss']
})
export class AppCadastroComponent implements OnInit {
  nomeCadastro!: FormGroup;
  fotoCadastro!: FormGroup;
  emailCadastro!: FormGroup;
  senhaCadastro!: FormGroup;
  confirmaSenhaCadastro!: FormGroup;

  isEditable = false;

  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required),
  }, { validators: passwordsMatchValidator() });


  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router
  ) { }

  get nome() {
    return this.formularioCadastro.get('nome')
  }

  get email() {
    return this.formularioCadastro.get('email')
  }

  get senha() {
    return this.formularioCadastro.get('senha')
  }

  get confirmaSenha() {
    return this.formularioCadastro.get('confirmaSenha')
  }

  get url() {
    return this.formularioCadastro.get('url')
  }

  next(){
    if(!this.formularioCadastro.valid){
      return;
    }
  }

  enviaCadastro() {
    if (!this.formularioCadastro.valid) {
      return;
    }

    const { nome, email, senha, url } = this.formularioCadastro.value;
    this.autenticacaoFirebaseService
      .cadastrarUsuario(nome, email, senha, url)
      .pipe(
        this.toast.observe({
          success: 'Cadastro executado, bem vindo ao BookShelf!',
        })
      ).subscribe(() => {
        this.formularioCadastro.reset();
        this.rotas.navigate(['/feed'])
      })

      this.autenticacaoFirebaseService.cadastrarUsuario(nome, email, senha, url).subscribe({

        error: (err) => {
          let message = 'Ocorreu um erro!'
          switch (err.code) {
            case 'auth/invalid-email':
              message = 'Email inválido';
              break;
            case 'auth/email-already-in-use':
              message = 'Email já cadastrado';
              break;
            case 'auth/weak-password':
              message = 'A senha deve ter 6 ou mais caracteres';
              break;
            default:
              message = 'Erro desconhecido'
        }
        this.toast.show(message);
      }
    })
  }

  ngOnInit(): void {
  }
}
