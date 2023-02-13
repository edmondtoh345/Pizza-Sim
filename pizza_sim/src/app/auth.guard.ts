import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Data, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private service: DataService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.service.isAuthenticated().pipe(map((data: any)=>{
        if(data.isAuthenticated){
          return true;
        }
        return false;
      }), catchError((err: HttpErrorResponse)=>{
        this.route.navigateByUrl('/login');
        return throwError(err);
      }))
  }
  
}