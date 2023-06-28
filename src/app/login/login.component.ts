import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthinticatedService } from './../service/hardcoded-authinticated.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username = '';
  password = '';
  errorMassage = 'Invalid Username or Password Please Try Again!';
  invalidLogin = false;

  constructor(private router: Router, private auth: HardcodedAuthinticatedService){

  }

  ngOnInit() {


  }

  UserDetail(){

    if(this.auth.authenticate(this.username, this.password))
    {
      
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
      
    }else{

      this.invalidLogin = true;

    }

  }


}
