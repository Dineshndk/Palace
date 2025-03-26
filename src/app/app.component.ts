import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './services/apiservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'palaceUI';

  constructor(private router:Router,private apiService:ApiserviceService){
    
  }

  ngOnInit(): void {
    
  }
  
  
}
