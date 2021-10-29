import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular with @angular/fire';

  email: string;
  passwd: string;

  constructor(public authService: AuthService) {}

  loginEmail() {
    this.authService.loginEmail(this.email, this.passwd);
    this.email = this.passwd = "";
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
