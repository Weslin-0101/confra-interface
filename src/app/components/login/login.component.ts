import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    SignupComponent
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
