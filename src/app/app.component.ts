import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'log-sign';
  ismenurequired=false; 
  constructor( private router:Router, private service:AuthserviceService){
  
  }
  ngDoCheck(): void {
    let currentURL = this.router.url
    if (currentURL=='/login'|| currentURL=='/registration') {
      this.ismenurequired=false;
    } else {
      this.ismenurequired=true; 
    }//docheck is a change detection system, evertime we want to check for any changes this docheck hook is called

  }
}
