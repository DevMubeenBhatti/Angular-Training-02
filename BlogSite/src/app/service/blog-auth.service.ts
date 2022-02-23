import { Injectable } from '@angular/core';
import { Authmodel} from "../model/authmodel"

@Injectable({
  providedIn: 'root'
})
export class BlogAuthService {

  userAuth = [
    {
      userName: "mubeeen@system.com",
      password: "mubeen123"
    },
    {
      userName: "aneeq@system.com",
      password: "aneeq123"
    },
    {
      userName: "admin@system.com",
      password: "admin123"
    }
  ]
  constructor() { }

  login(authModel: Authmodel){
    console.log("authdata:" + authModel.userName)
    console.log("authdata:" + authModel.password)
    var isUserExist = this.userAuth.some(value =>value.userName == authModel.userName && value.password == authModel.password);
    console.log("User Exist:" + isUserExist)
    return isUserExist
  }
}
