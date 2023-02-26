import { AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements AfterViewInit {

  @ViewChild("myButton") carousel!: ElementRef;
  @Output('login') login: EventEmitter<boolean>; 
  protected newsText: string;
  protected weatherText: string;
  protected newsTextShow: string;
  protected weatherTextShow: string;
  protected isFinishAnimationNews: boolean;
  protected isFinishAnimationWeather: boolean;

  constructor(private renderer: Renderer2) {
    this.newsText = 'Keep up to date with the latest news from around the world on our news portal.'
    this.weatherText = 'Keep up to date with the latest weather news in your area on our weather portal.';
    this.newsTextShow = '';
    this.weatherTextShow = '';
    this.isFinishAnimationNews = false;
    this.isFinishAnimationWeather = false;
    this.login = new EventEmitter();
  }

  ngAfterViewInit(): void {
    this.renderer.selectRootElement(this.carousel.nativeElement).click();
    let count = 0;
    let intervalNews = setInterval(() => {
      this.newsTextShow += this.newsText.charAt(count++);
      if (count == this.newsText.length) {
        clearInterval(intervalNews);
        this.isFinishAnimationNews = true;
      }
    }, 100);
    setTimeout(() => {
      let count2 = 0;
      let intervalWeather = setInterval(() => {
        this.weatherTextShow += this.weatherText.charAt(count2++);
        if (count2 == this.weatherText.length) {
          clearInterval(intervalWeather);
          this.isFinishAnimationWeather = true;
        }
      }, 100);
    },12500)
  }

}
