import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BlogAuthService } from '../service/blog-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:String = '';
  password:string = '';
  loginForm: FormGroup | undefined;
  message = "";
  loginAttempts = 0;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private blogauthService: BlogAuthService
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
   }

   onSubmit(){
     if(this.loginAttempts === 3){
        this.message = "Too Many invalid attempts"
        return
     }
     const credentials = this.loginForm?.value;
     var isUserExist = this. blogauthService.login(credentials)
     if(isUserExist){
      this.message = "Successfully Logged in";
      // this.toastr.success('welcome to dashboard', 'Success');
      this.router.navigateByUrl('/dashboard');
     } else {
       this.loginAttempts +=1
       this.message = "invalid credentials";
      //  this.toastr.error('Login Fail', 'Error');
     }
   }

  ngOnInit(): void {
  }
  
  signUp(){
    this.router.navigateByUrl('/signup');
  }
  signIn(){
    // if(this.userName == "admin" && this.password == "admin123"){
    //   this.toastr.success('welcome to dashboard', 'Success');
    //   this.router.navigateByUrl('/dashboard');
    // }else{
    //   this.toastr.error('Login Fail', 'Error');
    // }
  }
  forgotPass(){
    this.router.navigateByUrl('/forgot-password')
  }
}
