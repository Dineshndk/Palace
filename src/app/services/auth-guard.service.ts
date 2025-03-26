import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {jwtDecode, JwtPayload } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  CanActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    return true;
   }

   public getToken():any{
    return localStorage.getItem("Token");
  }

}

export const  IsAdminGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean =>{
return inject(AuthGuardService).CanActivate(route, state);
}

