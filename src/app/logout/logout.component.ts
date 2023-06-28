import { Component, OnInit } from '@angular/core';
import { HardcodedAuthinticatedService } from '../service/hardcoded-authinticated.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{

  constructor(private auth: HardcodedAuthinticatedService){
    
  }
  ngOnInit(): void {
    
    this.auth.logoutUser();

  }



}
