import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output('click-menu') menu: EventEmitter<boolean>;

  constructor() {
    this.menu = new EventEmitter();
  }

  ngOnInit(): void {}

}
