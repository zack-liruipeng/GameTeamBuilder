import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Gamename} from './Gamename';
import {Platform} from './Platform';
import {Type} from './Type';
import {Timezone} from './Timezone';
import {Playstyle} from './Playstyle';
import {Request} from './Request';
import {Gender}  from './Gender';
import {Userprofile}  from './Userprofile';

//get all game profile
import {Destinyprofile} from './Destinyprofile';
import {Wowprofile} from './Wowprofile';
import {Leftprofile} from './Leftprofile';
import {Diabloprofile} from './Diabloprofile';

//all user inforomation
import {Destinyuser} from './Destinyuser';
import {Wowuser} from './Wowuser';
import {Leftuser} from './Leftuser';
import {Diablouser} from './Diablouser';

//show all game platforms
import {Destinyplatform} from './Destinyplatform';
import {Wowplatform} from './Wowplatform';
import {Leftplatform} from './Leftplatform';
import {Diabloplatform} from './Diabloplatform';

//show all game characters
import {Destinycharacter} from './Destinycharacter';
import {Wowcharacter} from './Wowcharacter';
import {Leftcharacter} from './Leftcharacter';
import {Diablocharacter} from './Diablocharacter';

@Injectable() 
export class DatabaseService {
  date: number = Date.now();
  today:string;
  
//get all data from database
  gamenames        : FirebaseListObservable<Gamename[]>;
  platforms        : FirebaseListObservable<Platform[]>;
  types            : FirebaseListObservable<Type[]>;
  timezones        : FirebaseListObservable<Timezone[]>;
  playstyles       : FirebaseListObservable<Playstyle[]>;
  requests         : FirebaseListObservable<Request[]>;
  genders          : FirebaseListObservable<Gender[]>;
  userprofiles     : FirebaseListObservable<Userprofile[]>;
  
  destinyprofiles  : FirebaseListObservable<Destinyprofile[]>;
  wowprofiles      : FirebaseListObservable<Wowprofile[]>;
  leftprofiles     : FirebaseListObservable<Leftprofile[]>;
  diabloprofiles   : FirebaseListObservable<Diabloprofile[]>;
  
  wowusers         : FirebaseListObservable<Wowuser[]>;
  destinyusers     : FirebaseListObservable<Destinyuser[]>;
  leftusers        : FirebaseListObservable<Leftuser[]>;
  diablousers      : FirebaseListObservable<Diablouser[]>;
  
  destinyplatforms : FirebaseListObservable<Destinyplatform[]>;
  wowplatforms     : FirebaseListObservable<Wowplatform[]>;
  leftplatforms    : FirebaseListObservable<Leftplatform[]>;
  diabloplatforms  : FirebaseListObservable<Diabloplatform[]>;
  
  destinycharacters : FirebaseListObservable<Destinycharacter[]>;
  wowcharacters     : FirebaseListObservable<Wowcharacter[]>;
  leftcharacters    : FirebaseListObservable<Leftcharacter[]>;
  diablocharacters  : FirebaseListObservable<Diablocharacter[]>;
  
  constructor(private _af: AngularFire) {
    console.log("this date name 111:"+this.date);
  };

//get all data from database
  getGamename(){
        this.gamenames = this._af.database.list('/gamenames') as 
        FirebaseListObservable<Gamename[]>
        return this.gamenames;
  };
  
  getType(){
        this.types = this._af.database.list('/types') as 
        FirebaseListObservable<Type[]>
        return this.types;
  };
  
  getTimezone(){
        this.timezones = this._af.database.list('/timezones') as 
        FirebaseListObservable<Timezone[]>
        return this.timezones;
  };
  getPlaystyle(){
        this.playstyles = this._af.database.list('/playstyles') as 
        FirebaseListObservable<Playstyle[]>
        return this.playstyles;
  };
  
  getPlatform(){
       this.platforms = this. _af.database.list('/platforms') as
       FirebaseListObservable<Platform[]>
       return this.platforms;
  };
  
  getGender(){
       this.genders = this. _af.database.list('/genders') as
       FirebaseListObservable<Gender[]>
       return this.genders;
  };
  
//request info
  getUserprofile(name:string = null){
    if(name !=null) {
       this.userprofiles = this. _af.database.list('/userprofiles',{
         query: {
           orderByChild:"name",
           equalTo: name,
         }
       }) as
       FirebaseListObservable<Userprofile[]>
       return this.userprofiles;
    }
    else {
       this.userprofiles = this. _af.database.list('/userprofiles') as
       FirebaseListObservable<Userprofile[]>
       return this.userprofiles;
    }
  };
  
  getRequest(gamename:string = null, platform:string = null, timezone:string = null){
    if(gamename != null && platform == null  && timezone == null){
       this.requests = this. _af.database.list('/requests',{
         query: {
           orderByChild:'game',
           equalTo: gamename,
         }
       }) as
       FirebaseListObservable<Request[]>
       
    } else if (gamename == null && platform !=null && timezone == null){
      this.requests = this. _af.database.list('/requests',{
         query: {
           orderByChild:'platform',
           equalTo: platform,
         }
       }) as
       FirebaseListObservable<Request[]>
       
    } else if (gamename == null && platform ==null && timezone != null){
      this.requests = this. _af.database.list('/requests',{
         query: {
           orderByChild:'timezone',
           equalTo: timezone,
         }
       }) as
       FirebaseListObservable<Request[]>
       
    } else if (gamename != null && platform !=null && timezone == null){
      this.requests = this. _af.database.list('/requests',{
         query: {
           orderByChild:'platform',
           equalTo: platform,
         }
       }) as
       FirebaseListObservable<Request[]>
    } else {
      this.requests = this. _af.database.list('/requests',{
        query: {
          orderByChild: 'time2',
          startAt: '2017-04-18',
        }
      }) as
      FirebaseListObservable<Request[]>
      console.log(this.requests);
    }
      return this.requests;
  };

 getMyrequest(name:string) {
      this.requests = this. _af.database.list('/requests',{
         query: {
           orderByChild:"name",
           equalTo: name,
         }
      }) as
      FirebaseListObservable<Request[]>
      console.log(this.requests);
      return this.requests;
    };
 
//GAME PAGE USER INFO
    getWowuser(){
       this.wowusers = this. _af.database.list('/wowusers') as
       FirebaseListObservable<Wowuser[]>
       return this.wowusers;
  };
  
    getDestinyuser(){
       this.destinyusers = this. _af.database.list('/destinyusers') as
       FirebaseListObservable<Destinyuser[]>
       return this.destinyusers;
  };
  
    getLeftuser(){
       this.leftusers = this. _af.database.list('/leftusers') as
       FirebaseListObservable<Leftuser[]>
       return this.leftusers;
  };
  
    getDiablouser(){
       this.diablousers = this. _af.database.list('/diablousers') as
       FirebaseListObservable<Diablouser[]>
       return this.diablousers;
  };

//GAME PAGE platform
    getDestinyplatform(){
       this.destinyplatforms = this. _af.database.list('/destinyplatforms') as
       FirebaseListObservable<Destinyplatform[]>
       return this.destinyplatforms;
  };
  
    getWowplatform(){
       this.wowplatforms  = this. _af.database.list('/wowplatforms') as
       FirebaseListObservable<Wowplatform[]>
       return this.wowplatforms ;
  };
  
    getLeftplatform(){
       this.leftplatforms = this. _af.database.list('/leftplatforms') as
       FirebaseListObservable<Leftplatform[]>
       return this.leftplatforms;
  };
  
    getDiabloplatform(){
       this.diabloplatforms = this. _af.database.list('/diabloplatforms') as
       FirebaseListObservable<Diabloplatform[]>
       return this.diabloplatforms;
  };
  

//GAME PAGE character
    getDestinycharacter(){
       this.destinycharacters = this. _af.database.list('/destinycharacters') as
       FirebaseListObservable<Destinycharacter[]>
       return this.destinycharacters;
  };
  
    getWowcharacter(){
       this.wowcharacters  = this. _af.database.list('/wowcharacters') as
       FirebaseListObservable<Wowcharacter[]>
       return this.wowcharacters;
  };
  
    getLeftcharacter(){
       this.leftcharacters = this. _af.database.list('/leftcharacters') as
       FirebaseListObservable<Leftcharacter[]>
       return this.leftcharacters;
  };
  
    getDiablocharacter(){
       this.diablocharacters = this. _af.database.list('/diablocharacters') as
       FirebaseListObservable<Diablocharacter[]>
       return this.diablocharacters;
  };  
  
  //profiles
    getDestinyprofiles(name:string){
       this.destinyprofiles = this. _af.database.list('/destinyprofiles',{
         query: {
           orderByChild:"name",
           equalTo: name,
         }
       }) as
       FirebaseListObservable<Destinyprofile[]>
       return this.destinyprofiles;
    };
    
    getWowprofiles(name:string){
      this.wowprofiles = this. _af.database.list('/wowprofiles',{
        query: {
           orderByChild:"name",
           equalTo: name,
         }
      }) as
      FirebaseListObservable<Wowprofile[]>
      return this.wowprofiles;
    };
    
    getLeftprofiles(name:string){
      this.leftprofiles = this. _af.database.list('/leftprofiles',{
        query: {
           orderByChild:"name",
           equalTo: name,
         }
      }) as
      FirebaseListObservable<Leftprofile[]>
      return this.leftprofiles;
    };
    
    getDiabloprofiles(name:string){
      this.diabloprofiles = this. _af.database.list('/diabloprofiles',{
        query: {
           orderByChild:"name",
           equalTo: name,
         }
      }) as
      FirebaseListObservable<Diabloprofile[]>
      return this.diabloprofiles;
    };
    
//CRUD
  postrequest(newpost){
    return this.requests.push(newpost);
  };
  
  updaterequest(key, updrequest){
    return this.requests.update(key, updrequest);
  };
  
  deleterequest(key){
    return this.requests.remove(key);
  };
  
  postuserprofile(newpost){
    return this.userprofiles.push(newpost);
  };
  
  updateuserprofile(key, upduserprofile){
    return this.userprofiles.update(key, upduserprofile);
  };
  
  postdestinyprofile(newprofile){
    return this.destinyprofiles.push(newprofile);
  };
  
  postwowprofile(newpost){
    return this.wowprofiles.push(newpost);
  };

  postleftprofile(newpost){
    return this.leftprofiles.push(newpost);
  };
  
  postdiabloprofile(newpost){
    return this.diabloprofiles.push(newpost);
  };
  
//gamelist
  adddestinylist(newlist){
    return this.destinyusers.push(newlist);
  };
  
  addleftlist(newlist){
    return this.leftusers.push(newlist);
  };
  
  adddiablolist(newlist){
    return this.diablousers.push(newlist);
  };
  
  addwowlist(newlist){
    return this.wowusers.push(newlist);
  };
}