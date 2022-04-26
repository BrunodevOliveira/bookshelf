import { Injectable } from '@angular/core';
import { Auth} from '@angular/fire/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile,getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  usuarioLogado$ = authState(this.usuarioFb);
  auth = getAuth()

  constructor(
    private usuarioFb: Auth
    ) { }

    loginUsuario(usuarioEmail: string, usuarioSenha: string){
      return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha));
    }

    sairLogin(){
      return from(this.usuarioFb.signOut());
    }

    cadastrarUsuario(nome: string, email: string, senha: string, url: string){
      return from(createUserWithEmailAndPassword(this.usuarioFb, email, senha)).pipe(
        switchMap(({user}) => updateProfile(user, {displayName: nome, photoURL: url}))
      )
    }

    logarGoogle(){
      const provider = new GoogleAuthProvider();
      return from(signInWithPopup(this.auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential!.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }))
    }
    recuperarSenha(email: string){
      return from(sendPasswordResetEmail(this.usuarioFb, email))
    }
}
