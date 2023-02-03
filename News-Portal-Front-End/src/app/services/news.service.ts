import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private endPointEveryThing = 'https://newsapi.org/v2/everything?';
  private endPointTopHeadlines = 'https://newsapi.org/v2/top-headlines?';
  private apiKey = 'ca141bb5a0ea4df5b8f9522356865b20'

  constructor(private http: HttpClient) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d1ab6df51d9276fca77a4e87e6515e82').subscribe(r=>console.log(r))
  }

  getNewsCountry(searchText: string, country: string, page: number): Observable<any> {
    return this.http.get(`${this.endPointTopHeadlines}q=${searchText != '' ? searchText : 'a'}&country=${country}&page=${page}&apiKey=${this.apiKey}`);
  }

  getNews(searchText: string, page: number): Observable<any> {
    return this.http.get(`${this.endPointEveryThing}q=${searchText != '' ? searchText : 'a'}&page=${page}&apiKey=${this.apiKey}`);
  }

  getNewsRange(searchText: string, page: number, start: string, end: string): Observable<any> {
    return this.http.get(`${this.endPointEveryThing}q=${searchText != '' ? searchText : 'a'}&page=${page}&from=${start}&to=${end}&apiKey=${this.apiKey}`);
  }


}
