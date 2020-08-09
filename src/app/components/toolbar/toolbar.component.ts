import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  username: string = 'Admin';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    // this.username = JSON.parse(localStorage.getItem('spacex_user_data')).fullName;
  }

  logout(){
    this.authService.removeUser();
    this.router.navigate(['/login']);
  }


}
