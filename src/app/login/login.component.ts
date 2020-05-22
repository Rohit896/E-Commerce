import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login';
import { DataStorageService } from '../services/data-storage.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  email: string;
  password:string;
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.email);
    console.log(this.password);
     var login = new Login(this.email,this.password);
    this.dataStorage.loginValidation(login).subscribe(response=>{
        console.log(response);
        this.router.navigate(['/products']);
    });
}
}
