import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthinticatedService {

  constructor() { }

  authenticate(username: any, password: any){
    
    if(username === 'amarnath.sah' && password === 'Dummy'){

      sessionStorage.setItem('authenticatedUser', username);
      return true;

    }

    return false;
   
  }

  isUserLoggenIn(){

    let user = sessionStorage.getItem('authenticatedUser');

    return !(user === null)

  }

  logoutUser(){

    sessionStorage.removeItem('authenticatedUser')

  }

  

}
