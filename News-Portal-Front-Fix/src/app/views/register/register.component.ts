import { Component, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() closeRegister: EventEmitter<boolean>;
  @Output() backToLogin: EventEmitter<boolean>;
  protected names: FormControl;
  protected lastnames: FormControl;
  protected emailRegister: FormControl;
  protected passwordRegister: FormControl;
  protected passwordCRegister: FormControl;
  protected hide: boolean;

  protected formRegister: FormGroup;

  constructor(private formBuild: FormBuilder, private auth: AuthService) {
    this.closeRegister = new EventEmitter();
    this.backToLogin = new EventEmitter();
    this.hide = true;
    this.emailRegister = new FormControl('', [Validators.required, Validators.email]);
    this.passwordRegister = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]);
    this.passwordCRegister = new FormControl('', [this.equalPasswords, Validators.required]);
    this.names = new FormControl('', [Validators.required]);
    this.lastnames = new FormControl('', [Validators.required]);
    this.formRegister = this.formBuild.group({
      names: this.names,
      lastnames: this.lastnames,
      email: this.emailRegister,
      password: this.passwordRegister,
      passwordC: this.passwordCRegister
    })
  }

  private equalPasswords = (control: AbstractControl): ValidationErrors | null => {
    const password: string = this.passwordRegister.value;
    const repeat_password: string = control.value;
    if (password !== repeat_password) return { isValid: false };
    return null;
  }

  register() {
    this.auth.createUserWithEmailAndPassword(this.formRegister.value.email, this.formRegister.value.password).then(r => {
      this.formRegister.reset();
      this.back();
      Swal.fire(
        'Success',
        'User created successfully!',
        'success'
      );
    });
  }

  getErrorMessageRequired(option: number) {
    return (option == 0 ? this.names : this.lastnames).hasError('required') ? 'You must enter some value' : '';
  }

  getErrorMessageEmail() {
    return this.emailRegister.hasError('required') ? 'You must enter some value' :
      this.emailRegister.hasError('email') ? 'Invalid email' : '';
  }

  getErrorMessagePassword() {
    return this.passwordRegister.hasError('required') ? 'You must enter some value' : this.passwordRegister.hasError('pattern') ? 'Invalid password. Must have at least 1 character, 1 number and 1 special character' : '';
  }

  getErrorMessagePasswordC() {
    return this.passwordRegister.value !== this.passwordCRegister.value ? 'Passwords do not match' : '';
  }

  close() {
    this.closeRegister.emit(true);
  }

  back() {
    this.backToLogin.emit(true);
  }

}
