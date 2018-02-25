import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Request} from '../Request';
import { Gamename} from '../Gamename';
import { Platform} from '../Platform';
import { Type} from '../Type';
import { Timezone} from '../Timezone'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [DatabaseService]
})
export class RequestComponent implements OnInit {
  profile :any;
  file    : Array<Object>;
  requests      : Request[];
  myrequests    : Request[];
  gamenames     : Gamename[];
  platforms     : Platform[];
  timezones     : Timezone[];
  types         : Type[];
  
//get update data  
  appState      : string;
  activekey     : string;
  activegame    : string;
  activeplatform: string;
  activetype    : string;
  activemort    : string;
  activetime    : Date;
  activeduration: string;
  activedescription: string;
  
  constructor(private databaseService:DatabaseService,private auth: AuthService) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
        this.file = [];
      }

  ngOnInit() {
    this.databaseService.getTimezone().subscribe(timezones => {
     this.timezones = timezones;
    });
    
    this.databaseService.getRequest().subscribe(requests => {
     this.requests = requests;
    });
    
    this.databaseService.getGamename().subscribe(gamenames => {
     this.gamenames = gamenames;
    }); 
    
    this.databaseService.getPlatform().subscribe(platforms => {
     this.platforms = platforms;
    });
    
    this.databaseService.getType().subscribe(types => {
     this.types= types;
    });

//get my request
    this.databaseService.getMyrequest(this.profile.nickname).subscribe(myrequests => {
     this.myrequests = myrequests;
    });
  }
  
//function hide and show some infomation
  changeState(state,key){
    console.log('change state to:'+state);
    if(key) {
      console.log('change key = key:'+key);
      this.activekey = key;
    }
    this.appState = state;
  };

//filter function
  filterPlatform(platform){
     this.databaseService.getRequest(null,platform,null).subscribe(requests => {

     this.requests = requests;
     console.log('platform:'+requests);
    });
  };
  
  filterGamename(gamename){
     this.databaseService.getRequest(gamename).subscribe(requests => {
     this.requests = requests;
    });
   };
   
  filterTime(time){
    console.log("filter time:+++:"+time);
     this.databaseService.getRequest(null,null,time).subscribe(requests => {
     this.requests = requests;
    });
  };
  
  combinefilter(platform,gamename,time){
    if (platform != null) {
      
    } else if (gamename != null) {
      
    } else if (time != null) {
      
    };
  };


//post requests
   postrequest(name:string,
        email       : string,
        game        : string,
        platform    : string,
        type        : string,
        mort        : string,
        time        : Date,
        timezone    : string,
        duration    : string,
        description : string){
            
      var newpost ={
        name:name,
        email:email,
        game: game,
        platform:platform,
        type: type,
        mort: mort,
        time: time,
        timezone:timezone,
        duration: duration,
        description: description
      };
      
      this.databaseService.postrequest(newpost);
      this.changeState('default');
   };


//display infomation   
  showrequest(request){
    this.changeState('edit', request.$key);
    this.activegame        = request.game;
    this.activeplatform    = request.platform;
    this.activetype        = request.type;
    this.activemort        = request.mort;
    this.activetime        = request.time;
    this.activeduration    = request.duration;
    this.activedescription = request.description;
   };

//update    
  updaterequest(){
    var editedrequest ={
      game        : this.activegame,  
      platform    : this.activeplatform,
      type        : this.activetype, 
      mort        : this.activemort,       
      time        : this.activetime,        
      duration    : this.activeduration,    
      description : this.activedescription 
     }
     
   this.databaseService.updaterequest(this.activekey, editedrequest);
   this.changeState('default');
   }
   
   deleterequest(key){
     this.databaseService.deleterequest(key);
     this.changeState('default');
   }
    
}
