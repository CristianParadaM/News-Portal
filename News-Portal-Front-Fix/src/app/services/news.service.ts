import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private endPointBackend = 'http://localhost:5000';
  private endPointEveryThing = 'https://newsapi.org/v2/everything?';
  private endPointTopHeadlines = 'https://newsapi.org/v2/top-headlines?';
  private apiKey = 'ca141bb5a0ea4df5b8f9522356865b20'

  constructor(private http: HttpClient, private auth: AuthService) { }

  getNewsCountry(searchText: string, country: string, page: number): Observable<any> {
    this.http.post(`${this.endPointBackend}/logs/postLog`, { user: this.auth.user, method: 'GET', url: 'https://newsapi.org' }).subscribe(r=>console.log(r));
    return this.http.get(`${this.endPointTopHeadlines}q=${searchText != '' ? searchText : 'a'}&country=${country}&page=${page}&apiKey=${this.apiKey}`);
  }
  
  getNews(searchText: string, page: number): Observable<any> {
    this.http.post(`${this.endPointBackend}/logs/postLog`, { user: this.auth.user, method: 'GET', url: 'https://newsapi.org' }).subscribe(r=>console.log(r));
    return this.http.get(`${this.endPointEveryThing}q=${searchText != '' ? searchText : 'a'}&page=${page}&apiKey=${this.apiKey}`);
  }
  
  getNewsRange(searchText: string, page: number, start: string, end: string): Observable<any> {
    this.http.post(`${this.endPointBackend}/logs/postLog`, { user: this.auth.user, method: 'GET', url: 'https://newsapi.org' }).subscribe(r=>console.log(r));
    return this.http.get(`${this.endPointEveryThing}q=${searchText != '' ? searchText : 'a'}&page=${page}&from=${start}&to=${end}&apiKey=${this.apiKey}`);
  }


}
