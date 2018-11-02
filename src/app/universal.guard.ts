import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<any> {

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot): boolean{
      const currentURL = currentRoute.url;
      const previousUrl = currentState.url;

      let result = window.confirm('Are you Sure?');
      if(!result){

        //this.route.navigate([previousUrl]);
        result = true;
      }

      /*if(result){
        this.route.navigate([previousUrl]);
      }*/
    return result;
  }

  constructor(private route:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      let allow = false;
      if(sessionStorage.getItem('logged') === 'true'){
        allow = true;
      }else{
        this.route.navigate(['login','Logged In User can only access this page']);
      }
    return allow;
  }
}
