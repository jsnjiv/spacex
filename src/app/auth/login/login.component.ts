import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  user: any = {
    username: 'admin',
    password: 'admin'
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    if (!this.user.username || !this.user.password) {
      alert("Both fields are mandatory!");
      return
    }
    this.loading = true;
    this.authService.setUserData({
      fullName:"Admin"
    });
    setTimeout(()=>{
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
}
