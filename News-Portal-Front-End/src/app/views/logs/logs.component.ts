import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  protected logs$: Observable<any>;

  constructor(private logsSvc : LogsService) { }

  ngOnInit(): void {
    this.logs$ = this.logsSvc.getLogs();
    this.logs$.subscribe(r=>console.log(r))
  }

}
