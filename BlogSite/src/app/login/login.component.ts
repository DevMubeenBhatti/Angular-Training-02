import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  signUp(){
    this.router.navigateByUrl('/signup');
  }
  signIn(){
    this.router.navigateByUrl('/dashboard')
  }
  forgotPass(){
    this.router.navigateByUrl('/forgot-password')
  }
}