import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  @Output('close') closePanel: EventEmitter<boolean>;
  protected name: string;
  protected options: any;

  constructor(private auth: AuthService) {
    this.closePanel = new EventEmitter();
    this.name = this.auth.user;
  }

  ngOnInit(): void {
    this.options = [
      {title: 'News', icon: 'library_books', link:'/menu/news'},
      {title: 'Weather', icon: 'wb_sunny', link:'/menu/weather'},
      {title: 'Logs', icon: 'filter_frames', link:'/menu/logs'},
      {title: 'Logout', icon: 'close', link:''}
    ];
  }

}
