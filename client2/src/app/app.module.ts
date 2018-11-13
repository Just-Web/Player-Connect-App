import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatTabsModule, MatCardModule }    from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { AboutComponent } from './about/about.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { RegistrationComponent } from './registration/registration.component';
//import {FlashMessagesModule} from 'angular2-flash-messages';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component:PlayerRegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfilePageComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpModule,
  //  FlashMessagesModule,
  //  RouterModule.forRoot(appRoutes),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    AboutComponent,
    ProfilePageComponent,
    PlayerRegistrationComponent,
    LoginComponent,
    ChatComponent,
    HomeComponent,
    RegistrationComponent
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
