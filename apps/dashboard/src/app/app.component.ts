import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty-two/core-data';

@Component({
  selector: 'mdv-twenty-two-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'dashboard';

  links = [
    { path: '/rockets', icon: 'work', title: 'Rockets' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
