import { Injectable } from '@angular/core';
import { HttpModule } from ‘@angular/http’;

@Injectable()
export class PostService {
  
  constructor(private _http:HttpModule) { }
    getpost(){
      return this._http.get("Localhost");
      .map(res => res.json());
  }
}
