import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { MatIcon } from '@angular/material/icon';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationSlotTime } from 'src/app/models/ReservationSlotTime';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  ReservationForm:FormGroup;
  public arSlotTime:ReservationSlotTime[] = [];

  
  public GuestCount:number = 2;
  public GuestDisplayValue:string = "";

  constructor(private FormBuilder:FormBuilder,private apiService:ApiserviceService){
    this.apiService.bIsReservation.next(true);

    this.ReservationForm = FormBuilder.group({
      PartySize: new FormControl('', [Validators.maxLength(10)]),
      Date: new FormControl(''),
      Time: new FormControl('')
    });
  }
  ngOnInit(){
    this.setGuestDisplayValue();
    this.getSlotTime();
  }

  AddGuestCount(bIsAdd:boolean=false){
    this.GuestCount = (bIsAdd == true) ?  this.GuestCount + 1 : this.GuestCount - 1;
    
    this.setGuestDisplayValue();
  }

  private setGuestDisplayValue(){
    this.GuestDisplayValue = this.GuestCount + ' guest' + (this.GuestCount > 1 ? 's' : '');
  }

  private getSlotTime(){
    /* this.apiService.GetReservationSlotTime().subscribe((data : ReservationSlotTime[])=>{
      if(data)
        this.arSlotTime = data;
      }); */  
  }

}
