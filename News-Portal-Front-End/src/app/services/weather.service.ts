import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private endPoint = 'http://api.openweathermap.org/data/2.5/weather?';
  private apiKey = 'd1ab6df51d9276fca77a4e87e6515e82';

  constructor(private http: HttpClient) {
  }

  getWeather(city: string, country: string): Observable<any> {
    return this.http.get(`${this.endPoint}q=${city},${country}&APPID=${this.apiKey}`);
  }
  
}
