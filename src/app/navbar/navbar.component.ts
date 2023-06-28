import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthinticatedService } from '../service/hardcoded-authinticated.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

 
  //isUserLoggedIn: boolean = false;

  constructor(public auth: HardcodedAuthinticatedService, private route: ActivatedRoute){

  }
  username: any = this.route.snapshot.params['username'];

  ngOnInit(): void {

    //this.isUserLoggedIn = this.auth.isUserLoggenIn();


  }

 

}
