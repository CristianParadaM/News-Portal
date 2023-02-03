import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPointBackend = 'http://localhost:5000';
  public user: string = 'crispo9028';
  
  constructor(private http: HttpClient){}

  signIn(email:string, password: string){
    this.http.get(`${this.endPointBackend}/auth/login`);
    this.user = email;
  }
}
