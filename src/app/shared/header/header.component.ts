import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public arMenuItems:{Name:string,URL:string}[]=[
    {"Name" : "Menu", "URL": "menu"},
    {"Name" : "Our Story", "URL": "our-story"},
    {"Name" : "Private Events", "URL": "private-events"},
    {"Name" : "Calendar", "URL": "calendar"},
    {"Name" : "Press", "URL": "Press"}
  ];

  public bIsReservation:boolean=false;

  constructor(private router:Router,private apiService:ApiserviceService){
  }

  ngOnInit(): void {
    this.apiService.bIsReservation.subscribe((result:boolean) =>
      {
        this.bIsReservation = result;

        console.log("Reservation = "+ this.bIsReservation);
      });
  }
  
  makeReservation():void{
    this.router.navigate(["/reservation"]).then(result => {  window.open('/reservation', '_blank'); });
  }
}
