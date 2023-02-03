import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  protected news$: Observable<any>;
  protected selectedCountry: FormControl;
  protected pageIndex: number;
  protected sizeItemsPage: number;
  protected range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  protected searchText: string;

  constructor(private newsService: NewsService) {
    this.pageIndex = 0;
    this.sizeItemsPage = 100;
    this.selectedCountry = new FormControl('us');
    this.searchText = '';
  }

  ngOnInit(): void {
    this.news$ = this.newsService.getNews(this.searchText, this.pageIndex + 1);
  }

  changeNews() {
    this.sizeItemsPage = 100;
    if (this.range.value.start != null && this.range.value.end != null) {
      this.news$ = this.newsService.getNewsRange(this.searchText, this.pageIndex + 1, this.range.value.start.toLocaleDateString('en-CA'), this.range.value.end.toLocaleDateString('en-CA'));
    } else {
      this.news$ = this.newsService.getNews(this.searchText, this.pageIndex + 1);
    }
  }
  
  changeNewsCountry() {
    this.sizeItemsPage = 20;
    this.news$ = this.newsService.getNewsCountry(this.searchText, this.selectedCountry.value, this.pageIndex + 1);
  }

  search(event: any) {
    if (event.keyCode == 13) {
      this.changeNews();
    }
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.changeNews();
  }
}
