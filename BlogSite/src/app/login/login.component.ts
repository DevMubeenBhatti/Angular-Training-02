import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:String = '';
  password:string = '';
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  
  signUp(){
    this.router.navigateByUrl('/signup');
  }
  signIn(){
    if(this.userName == "admin" && this.password == "admin123"){
      this.toastr.success('welcome to dashboard', 'Success');
      this.router.navigateByUrl('/dashboard');
    }else{
      this.toastr.error('Login Fail', 'Error');
    }
  }
  forgotPass(){
    this.router.navigateByUrl('/forgot-password')
  }
}
