import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';


declare var Auth0Lock: any;

@Injectable()
export class AuthService {
 
  //设置auth0
  lock = new Auth0Lock('0BfF3mmgfJFpxab3sUYbh5rpP2e5nCcC','ece9065.auth0.com', {
        theme: {
            logo: "http://i67.tinypic.com/23shx0y.jpg",
            primaryColor: "black",
        },
        languageDictionary: {
            title: "Login page"
        }
  });
  
  constructor() {
        this.lock.on("authenticated", (authResult:any) => {
        this.lock.getProfile(authResult.idToken,function(error:any,profile:any){
            if(error){
                throw new Error(error);
            }
             localStorage.setItem('profile', JSON.stringify(profile));
             localStorage.setItem('id_token', authResult.idToken);
        })
       
    });
  }

   public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };
}
