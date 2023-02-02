import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  @Output('close') closePanel: EventEmitter<boolean>;
  @Output('logged') isLogged: EventEmitter<boolean>;
  protected hide: boolean;
  protected emailLogin: FormControl;
  protected passwordLogin: FormControl;

  protected formLogin: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.closePanel = new EventEmitter();
    this.isLogged = new EventEmitter();
    this.hide = true;
    this.emailLogin = new FormControl('', [Validators.required, Validators.email]);
    this.passwordLogin = new FormControl('', [Validators.required]);
    this.formLogin = this.formBuild.group({
      email: this.emailLogin,
      password: this.passwordLogin
    })
  }

  getErrorMessageEmail() {
    return this.emailLogin.hasError('required') ? 'You must enter some value' :
      this.emailLogin.hasError('email') ? 'Invalid email' : '';
  }

  getErrorMessagePassword() {
    return this.passwordLogin.hasError('required') ? 'You must enter some value' : ''
  }

  login(option: number) {
  //   (option == 0 ? this.auth.signInWithEmailAndPassword(this.formLogin.value.email, this.formLogin.value.password) :
  //     option == 1 ? this.auth.signInWithFacebook() : this.auth.signInWithGoogle()).then(r => this.isLogged.emit(true));
  }

}
