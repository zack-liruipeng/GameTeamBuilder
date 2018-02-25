//system list
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders  } from './app.routing';

//component list
import { AppComponent } from './app.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { LfgComponent } from './lfg/lfg.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdsComponent } from './ads/ads.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component';
import { RequestComponent } from './request/request.component';

//service list
import { AuthGuard } from './auth.guard';
import { AuthService} from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { ImageUploadModule } from 'angular2-image-upload';
import { CustomFormsModule } from 'ng2-validation'

//api list 
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FacebookService } from 'ng2-facebook-sdk';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { LeftComponent } from './left/left.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCXnApkpeclmYZoNTpCCIAzMp_s7EqeQqI",
  authDomain: "ece9065-36903.firebaseapp.com",
  databaseURL: "https://ece9065-36903.firebaseio.com",
  storageBucket: "ece9065-36903.appspot.com",
  messagingSenderId: "515720622927"
};


@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    LfgComponent,
    HeaderComponent,
    LoginComponent,
    AdsComponent,
    FrontPageComponent,
    NotfoundComponent,
    ProfileComponent,
    GamesComponent,
    RequestComponent,
    LeftComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAq_lfT4ah3mkXHSAeEmAffIhZwPw0I52k'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    ImageUploadModule.forRoot(),
    CustomFormsModule,
  ],
  providers: [
    FacebookService,
    appRoutingProviders,
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
