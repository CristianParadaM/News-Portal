import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  @Output('close') closePanel: EventEmitter<boolean>;
  protected name: string;
  protected options: any;

  constructor(private auth: AuthService, private router: Router) {
    this.closePanel = new EventEmitter();
    this.name = this.auth.user;
  }

  ngOnInit(): void {
    this.options = [
      { title: 'News', icon: 'library_books', link: '/menu/news' },
      { title: 'Weather', icon: 'wb_sunny', link: '/menu/weather' },
      { title: 'Logout', icon: 'close', link: '' }
    ];
  }

  goTo(title: string, link: string) {
    if (title == 'Logout') {
      Swal.fire({
        title: '¿Are you sure to logout?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'yes',
        denyButtonText: `no`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.auth.logOut().then(r => this.router.navigate([link]));
        }
      })
    } else {
      this.router.navigate([link]);
    }
  }

}
