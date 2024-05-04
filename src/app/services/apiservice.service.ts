import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservationSlotTime } from '../models/ReservationSlotTime';
import { apiserviceURL } from '../constants/apiserviceURL';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  public bIsReservation = new BehaviorSubject<boolean>(false);
  
  constructor(private httpClient:HttpClient) { 
    
  }

  //Get reservation slot time
  GetReservationSlotTime(): Observable<ReservationSlotTime[]>{
    const EndPoint = apiserviceURL.Reservation_url;

    return this.httpClient.get<ReservationSlotTime[]>(EndPoint);
  }
  
}
