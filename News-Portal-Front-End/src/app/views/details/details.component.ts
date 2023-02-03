import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  protected news: News;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const { author, content, description, publishedAt, source, title, url, urlToImage } = this.activatedRoute.snapshot.params;
    this.news = { author, content, description, publishedAt, source, title, url, urlToImage }
  }

  goBack(){
    this.router.navigate(['menu/news']);
  }

}
