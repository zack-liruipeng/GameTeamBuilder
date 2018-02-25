import { Component, OnInit,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FacebookService]
})

@NgModule({
 imports: [ FormsModule ]
})

export class LoginComponent implements OnInit {
  register='Create a new account';
  lat: number = 43.0077586;
  lng: number = -81.2771694;
  constructor(private fb: FacebookService) {
    let fbParams: FacebookInitParams = {
                                   appId: '100148860525102',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
  }
  
  ngOnInit() {
  }
  
  facebooklogin(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => console.log(response),
      (error: any) => console.error(error)
    )
  }
  
}
