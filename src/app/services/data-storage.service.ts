import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from '../models/Login';
import { UserDetails } from '../models/UserDetails';
import { Register } from '../models/Register';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
 
  userDetails;
  constructor(private http:HttpClient) { }


  loginValidation(login:Login):Observable<UserDetails>{
      console.log("in dataservice");
       var details =this.http.post<UserDetails>("http://localhost:8080/login",login);
       this.userDetails=details;
       return details;
  }
  register(register:Register):Observable<UserDetails>{
    console.log("in dataservice");
      return this.http.post<UserDetails>("http://localhost:8080/register",register);
}
   getUserData()
   {
     return this.userDetails;
   }
}
