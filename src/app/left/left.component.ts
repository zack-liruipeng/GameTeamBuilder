import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DatabaseService } from '../database.service';
import { Playstyle} from '../Playstyle';
import { Leftplatform} from '../Leftplatform';
import { Leftcharacter} from '../Leftcharacter';
import { Leftprofile} from '../Leftprofile';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  providers: [DatabaseService]
})

export class LeftComponent implements OnInit {
  profile:any;
  file: Array<Object>;
  playstyles : Playstyle[];
  leftplatforms   : Leftplatform[];
  leftcharacters  : Leftcharacter[];
  leftprofiles    : Leftprofile[];
  
  constructor(private databaseService:DatabaseService,private auth: AuthService) { 
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        this.file = [];
  };

  ngOnInit() {
    this.databaseService.getPlaystyle().subscribe(playstyles => {
     this.playstyles = playstyles;
    });
    
    this.databaseService.getLeftplatform().subscribe(leftplatforms => {
     this.leftplatforms = leftplatforms;
    }); 
    
    this.databaseService.getLeftcharacter().subscribe(leftcharacters => {
     this.leftcharacters = leftcharacters;
    }); 
    
    this.databaseService.getLeftprofiles().subscribe(leftprofiles => {
     this.leftprofiles = leftprofiles;
    }); 
  };

//get post infomation
postleftprofile(name: string,
        email:string,
        playerid:string,
        playstyle:string,
        platform:string,
        character:string
    ){
     
    var newpost ={
        name: name,
        email:email,
        playerid:playerid,
        playstyle:playstyle,
        platform:platform,
        character:character
      };

      this.databaseService.postleftprofile(newpost);
   }
}
