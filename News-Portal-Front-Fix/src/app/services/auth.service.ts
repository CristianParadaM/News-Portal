import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: string = 'none';

  constructor(private auth: Auth) {
    if (this.auth.currentUser != null) {
      this.user = this.auth.currentUser.email + '';
    }
  }

  public signInWithEmailAndPassword(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public createUserWithEmailAndPassword(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  public signInWithFacebook(){
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }
  
  public signInWithGoogle(){
    console.log('entro')
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  public logOut(){
    return signOut(this.auth);
  }

  
}
