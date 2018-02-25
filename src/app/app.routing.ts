import { RouterModule, Router,Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GamesComponent } from './games/games.component';
import { RequestComponent } from './request/request.component';
import { AuthGuard } from './auth.guard';

//this part is for routes
const appRoutes: Routes = [
   { path: '', component: FrontPageComponent},
   { path: 'login', component: LoginComponent},
   { path: 'games', component: GamesComponent},
   { path: 'request', component: RequestComponent},
   { path: 'profile', component:ProfileComponent, canActivate:[AuthGuard] },
   { path: '**', component:NotfoundComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


  