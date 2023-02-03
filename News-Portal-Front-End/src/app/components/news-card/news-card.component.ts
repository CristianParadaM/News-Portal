import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {

  @Input() news: News;

  constructor(private router: Router) {
    this.news = { author: '', content: '', description: '', urlToImage: '', publishedAt: '', source: '', title: '', url: '' }
  }

  showDetails() {
    this.router.navigate(['menu/details',this.news.author, this.news.content, this.news.description, this.news.publishedAt, this.news.source.name, this.news.title, this.news.url, this.news.urlToImage])
  }
}
