import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements  CanActivate {
constructor(private router:Router){

}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
  }
  else{
    this.router.navigate(['/Login'],{ queryParams: { returnUrl: state.url }});
    return false;
  }
  }
  
}
