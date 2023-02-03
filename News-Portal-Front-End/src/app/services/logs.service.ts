import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private endPointBackend = 'http://localhost:5000';

  constructor(private http: HttpClient, private auth: AuthService) { }

  getLogs(): Observable<any> {
    this.http.post(`${this.endPointBackend}/logs/postLog`, { user: this.auth.user, method: 'GET', url: 'https://localhost:5000/logs/getLogs' }).subscribe(r=>console.log(r));
    return this.http.get(`${this.endPointBackend}/logs/getLogs/${this.auth.user}`);
  }
  
}
