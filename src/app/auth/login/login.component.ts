import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }
  logIn() {
    this.isLoading = true;
    this.authService.logIn(this.email, this.password).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigateByUrl('/');
      },
      () => (this.isLoading = false)
    );
  }
}
