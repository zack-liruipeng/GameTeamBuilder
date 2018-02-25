import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../auth.service';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { DatabaseService } from '../database.service';
import { Playstyle} from '../Playstyle';
import { Timezone} from '../Timezone';
import { Gender} from '../Gender';
import { Gamename} from '../Gamename';

import { Userprofile} from '../Userprofile';
import { Destinyprofile} from '../Destinyprofile';
import { Wowprofile} from '../Wowprofile';
import { Diabloprofile} from '../Diabloprofile';

import { Destinyplatform} from '../Destinyplatform';
import { Wowplatform} from '../Wowplatform';
import { Leftplatform} from '../Leftplatform';
import { Diabloplatform} from '../Diabloplatform';

import { Destinycharacter} from '../Destinycharacter';
import { Wowcharacter} from '../Wowcharacter';
import { Leftcharacter} from '../Leftcharacter';
import { Diablocharacter} from '../Diablocharacter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DatabaseService]
})
export class ProfileComponent implements OnInit {
  profile :any;
  file    : Array<Object>;
  form    : FormGroup;
 
  playstyles   : Playstyle[];
  timezones    : Timezone[];
  genders      : Gender[];
  gamenames    : Gamename[];
  userprofiles : Userprofile[];
  test         :boolean;
  
  destinyprofiles : Destinyprofile[];
  wowprofiles     : Wowprofile[];
  diabloprofiles  : Diabloprofile[];
  
  destinyplatforms: Destinyplatform[];
  wowplatforms    : Wowplatform[];
  leftplatforms   : Leftplatform[];
  diabloplatforms : Diabloplatform[];
  
  destinycharacters: Destinycharacter[];
  wowcharacters    : Wowcharacter[];
  leftcharacters   : Leftcharacter[];
  diablocharacters : Diablocharacter[];

  appState       : string;
  activekey      : string;
  activename     : string;
  activeemail    : string;
  activeimage    : string;
  activeage      : string;
  activegender   : String;
  activetimezone : string;
  activeplaystyle: string;
  activephone    : string;
  activeweekday  : string;
  activeweekend  : string;
  
  constructor(private fb: FormBuilder, private databaseService:DatabaseService,private auth: AuthService) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.file = [];
         
        this.form = fb.group({
        age: new FormControl('', CustomValidators.range([1, 110])),
        })
       
  };

  ngOnInit() {
    this.appState="normal";
    
     this.databaseService.getUserprofile(this.profile.nickname).subscribe(userprofiles => {
     this.userprofiles = userprofiles;
    });
    
     this.databaseService.getDestinyprofiles(this.profile.nickname).subscribe(destinyprofiles => {
     this.destinyprofiles = destinyprofiles;
    });
    
     this.databaseService.getWowprofiles().subscribe(wowprofiles => {
     this.wowprofiles = wowprofiles;
    });
    
     this.databaseService.getDiabloprofiles().subscribe(diabloprofiles => {
     this.diabloprofiles = diabloprofiles;
    });
     
     this.databaseService.getPlaystyle().subscribe(playstyles => {
     this.playstyles = playstyles;
    });
    
     this.databaseService.getTimezone().subscribe(timezones => {
     this.timezones = timezones;
    });
    
     this.databaseService.getGender().subscribe(genders => {
     this.genders = genders;
    });
    
     this.databaseService.getGamename().subscribe(gamenames => {
     this.gamenames = gamenames;
    }); 
   
     this.databaseService.getDestinyplatform().subscribe(destinyplatforms => {
     this.destinyplatforms = destinyplatforms;
    }); 
    
     this.databaseService.getDestinycharacter().subscribe(destinycharacters => {
     this.destinycharacters = destinycharacters;
    }); 
    
     this.databaseService.getWowplatform().subscribe(wowplatforms => {
     this.wowplatforms = wowplatforms;
    }); 
     
     this.databaseService.getWowcharacter().subscribe(wowcharacters => {
     this.wowcharacters = wowcharacters;
    }); 
     
     this.databaseService.getLeftplatform().subscribe(leftplatforms => {
     this.leftplatforms = leftplatforms;
    }); 
    
     this.databaseService.getLeftcharacter().subscribe(leftcharacters => {
     this.leftcharacters = leftcharacters;
    }); 
       
     this.databaseService.getDiabloplatform().subscribe(diabloplatforms => {
     this.diabloplatforms = diabloplatforms;
    }); 
     
     this.databaseService.getDiablocharacter().subscribe(diablocharacters => {
     this.diablocharacters = diablocharacters;
    }); 
  };
  
  imageUploaded(event) {
    console.log(event.file);
    this.file.push(event.file);
  };
 
//show and hide different contents 
   changeState(state,key){
    console.log('change state to:'+state);
    if(key) {
      console.log('change key = key:'+key);
      this.activekey = key;
    }
    this.appState = state;
  };
  
//post all user infomation
   postuserprofile(name: string,
        email      :string,
        image      :string,
        age        :number,
        gender     :string,
        timezone   :string,
        microphone :string,
        weekday    :string,
        weekend    :string,
        ){
    
      var newpost ={
        name       : name,
        email      : email,
        image      : image,
        age        : age,
        gender     : gender,
        timezone   : timezone,
        microphone : microphone,
        weekday    : weekday,
        weekend    : weekend,
      };
     
      this.databaseService.postuserprofile(newpost);
      this.changeState('default');
   };

//display all user profile 
    showuserprofile(userprofile){
    this.changeState('update');
    this.activename       = userprofile.name;
    this.activeemail      = userprofile.email;
    this.activeimage      = userprofile.image;
    this.activeage        = userprofile.age;
    this.activegender     = userprofile.gender;
    this.activetimezone   = userprofile.timezone;
    this.activeplaystyle  = userprofile.playstyle;
    this.activephone      = userprofile.phone;
    this.activeweekday    = userprofile.weekday;
    this.activeweekend    = userprofile.weekend;
   };
   
  updateuserprofile(){
    var editeduserprofile ={
      name      :this.activename,
      email     :this.activeemail,
      image     :this.activeimage,
      age       :this.activeage,
      gender    :this.activegender,
      timezone  :this.activetimezone,
      playstyle :this.activeplaystyle,
      phone     :this.activephone,
      weekday   :this.activeweekday,
      weekend   :this.activeweekend,
     }

   this.databaseService.updateuserprofile(this.activekey, editeduserprofile);
   this.changeState('default');
   }

//post user's densitny profile   
   postdestinyprofile(name: string,
        email:string,
        playerid:string,
        playstyle:string,
        platform:string,
        character:string,
    ){
     
     var newprofile ={
        name: name,
        email:email,
        playerid:playerid,
        playstyle:playstyle,
        platform:platform,
        character:character,
      };
      console.log("profilepage:"+newprofile);
      this.databaseService.postdestinyprofile(newprofile);
      this.changeState('gameinfo');
   }

//post user's wow profile  
   postwowprofile(name: string,
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

     
       this.databaseService.postwowprofile(newpost);
        console.log('success');
      this.changeState('gameinfo');
   }

//post user's diablo profile  
  postdiabloprofile(name: string,
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

     
       this.databaseService.postdiabloprofile(newpost);
        console.log('success');
      this.changeState('gameinfo');
   }
    
}
