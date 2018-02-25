import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DatabaseService } from '../database.service';
import { Userprofile} from '../Userprofile';

@Component({
  selector: 'app-lfg',
  templateUrl: './lfg.component.html',
  styleUrls: ['./lfg.component.css'],
  providers: [DatabaseService]
})
export class LfgComponent implements OnInit {
  lat: number = 43.0077586;
  lng: number = -81.2771694;
  userprofiles: Userprofile[];
  usercount: number;
  
  newuser = 'Welcome to TEAMMATE, Please login to build your dream team';
  
  profile:any;
  
  constructor(private databaseService:DatabaseService, private auth: AuthService) {
     this.profile = JSON.parse(localStorage.getItem('profile'));
  }
    
  
  ngOnInit() {
     this.databaseService.getUserprofile().subscribe(userprofiles => {
     this.userprofiles = userprofiles;
     this.usercount = this.userprofiles.length;
    });
  }
  
}
