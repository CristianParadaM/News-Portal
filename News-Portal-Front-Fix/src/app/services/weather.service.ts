import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private endPointBackend = 'http://localhost:5000';
  private endPoint = 'http://api.openweathermap.org/data/2.5/weather?';
  private apiKey = 'd1ab6df51d9276fca77a4e87e6515e82';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getWeather(city: string, country: string): Observable<any> {
    this.http.post(`${this.endPointBackend}/logs/postLog`, { user: this.auth.user, method: 'GET', url: 'http://api.openweathermap.org' }).subscribe(r=>console.log(r));
    return this.http.get(`${this.endPoint}q=${city},${country}&APPID=${this.apiKey}&units=metric`);
  }

}
