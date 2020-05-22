import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Register } from '../models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name:String;
  address:String;
  city:String;
  state:String;
  country:String;
  Zipcode:String;
  email:String;
  mobile:String;
  password:String;
  creditCard:String;

  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
  }
  submit()
  {
console.log(this.name);
  var register=new Register(this.name,this.address,this.city,this.state,this.country,this.Zipcode,this.email,this.mobile,this.password,this.creditCard);
  this.dataStorage.register(register).subscribe(response=>{
    console.log(response);
});
}

}
