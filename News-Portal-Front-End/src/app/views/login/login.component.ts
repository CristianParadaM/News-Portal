import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output('close') closePanel: EventEmitter<boolean>;
  @Output('logged') isLogged: EventEmitter<boolean>;
  protected hide: boolean;
  protected emailLogin: FormControl;
  protected passwordLogin: FormControl;

  protected formLogin: FormGroup;

  constructor(private formBuild: FormBuilder, private auth: AuthService, private router: Router) {
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

  login() {
    this.auth.signIn(this.emailLogin.value, this.passwordLogin.value);
  }

}
