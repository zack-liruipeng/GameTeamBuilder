import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DatabaseService } from '../database.service';
import { Destinyuser} from '../Destinyuser';
import { Wowuser} from '../Wowuser';
import { Leftuser} from '../Leftuser';
import { Diablouser} from '../Diablouser';
import { Userprofile} from '../Userprofile';
import { Destinyprofile} from '../Destinyprofile';
import { Wowprofile} from '../Wowprofile';
import { Leftprofile} from '../Leftprofile';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [DatabaseService]
})

export class GamesComponent implements OnInit {
  games: FirebaseListObservable<any[]>;
  profile:any;
  file: Array<Object>;
  
  wowusers    : Wowuser[];
  destinyusers: Destinyuser[];
  leftusers   : Leftuser[];
  diablousers : Diablouser[];
  
  wowusercount: number;
  destinyusercount: number;
  leftusercount: number;
  diablousercount: number;
  
  destinyprofiles : Destinyprofile[];
  wowprofiles     : Wowprofile[];
  leftprofiles    :  Leftprofile[];
  
  appState    : string;
  activekey   : string;
  
  constructor(af: AngularFire, private auth: AuthService, private databaseService:DatabaseService) {
      this.games = af.database.list('/games');
      
      this.profile = JSON.parse(localStorage.getItem('profile'));
      console.log(this.profile);
      this.file = [];
  }
  
  ngOnInit() {
     this.databaseService.getWowuser().subscribe(wowusers => {
     this.wowusers = wowusers;
     this.wowusercount = this.wowusers.length;
    });
   
     this.databaseService.getDiablouser().subscribe(diablousers => {
     this.diablousers = diablousers;
     this.diablousercount = this.diablousers.length;
    });
    
     this.databaseService.getDestinyuser().subscribe(destinyusers => {
     this.destinyusers = destinyusers;
     this.destinyusercount = this.destinyusers.length;
    });
    
     this.databaseService.getLeftuser().subscribe(leftusers => {
     this.leftusers = leftusers ;
     this.leftusercount = this.leftusers.length;
    });
    
     this.databaseService.getDestinyprofiles(this.profile.name).subscribe(destinyprofiles => {
     this.destinyprofiles = destinyprofiles;
    });
    
     this.databaseService.getWowprofiles(this.profile.name).subscribe(wowprofiles => {
     this.wowprofiles = wowprofiles;
    });
    
    this.databaseService.getLeftprofiles(this.profile.name).subscribe(leftprofiles => {
     this.leftprofiles = leftprofiles;
    });
  }


//change state show and hide diiferent contents
  changeState(state,key){
    console.log('change state to:'+state);
    if(key) {
      console.log('change key = key:'+key);
      this.activekey = key;
    }
    this.appState = state;
  };

//add user game list if user already registered
    adddestinylist(name: string,
    ){
     var newprofile ={
        name: name,
      };
      this.databaseService.adddestinylist(newprofile);
   };
   
    addwowlist(name: string,
    ){
     var newprofile ={
        name: name,
      };
      console.log("wow:"+newprofile);
      this.databaseService.addwowlist(newprofile);
   };
   
    addleftlist(name: string,
    ){
     var newprofile ={
        name: name,
      };
      console.log("density:"+newprofile);
      this.databaseService.addleftlist(newprofile);
   };
   
  }

