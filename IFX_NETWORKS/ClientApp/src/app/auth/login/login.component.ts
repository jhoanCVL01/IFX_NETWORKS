import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/entidades']);
    }
    
  }

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.setAuthenticated(response.token); // Usa setAuthenticated para actualizar el estado global
        location.reload();
        this.router.navigate(['/entidades']);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
