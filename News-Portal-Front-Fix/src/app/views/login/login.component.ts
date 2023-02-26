import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output('close') closePanel: EventEmitter<boolean>;
  @Output('register') isRegister: EventEmitter<boolean>;
  protected hide: boolean;
  protected emailLogin: FormControl;
  protected passwordLogin: FormControl;

  protected formLogin: FormGroup;

  constructor(private formBuild: FormBuilder, private auth: AuthService, private router: Router) {
    this.closePanel = new EventEmitter();
    this.isRegister = new EventEmitter();
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
    this.auth.signInWithEmailAndPassword(this.emailLogin.value, this.passwordLogin.value).then(r => {
      this.auth.user = r.user.email + "";
      this.router.navigate(['/menu/news']);
    }).catch(e => alert('usuario invalido'));
  }

  loginSocialNetwork(option: number) {
    (option == 0 ? this.auth.signInWithGoogle() : this.auth.signInWithFacebook()).then(r => {
      this.router.navigate(['/menu/news']);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    }).catch(e =>
      Swal.fire(
        'Error',
        'Ha ocurrido algun error',
        'error'
      )
    );
  }
}
