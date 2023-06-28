import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HardcodedAuthinticatedService } from './hardcoded-authinticated.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private auth: HardcodedAuthinticatedService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  
    if(this.auth.isUserLoggenIn()){
      return true;
    }
    
    this.router.navigate(['login'])
    return false;

  }
}
