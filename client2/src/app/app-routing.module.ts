import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { AboutComponent }  from './about/about.component';
import { PlayerRegistrationComponent }  from './player-registration/player-registration.component';
import { ProfilePageComponent }  from './profile-page/profile-page.component';
import { LoginComponent }  from './login/login.component';
import { ChatComponent }  from './chat/chat.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfilecardComponent} from './profilecard/profilecard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'player_registration', component: PlayerRegistrationComponent},
  { path: 'profile/:username', component: ProfilePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'profile_card/:username', component: ProfilecardComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
