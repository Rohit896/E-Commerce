import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { UserDetails } from '../models/UserDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
userdetails:UserDetails;
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
    this.userdetails=this.dataStorage.getUserData();
    
  }
  
}
