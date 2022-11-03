import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChallengePanelComponent } from 'src/components/challenge/challenge-panel/challenge-panel.component';
import { EventPanelComponent } from 'src/components/event/event-panel/event-panel.component';
import { UserChallengePanelComponent } from 'src/components/user-challenge/user-challenge-panel/user-challenge-panel.component';
import { UserPanelComponent } from 'src/components/user/user-panel/user-panel.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    EventPanelComponent,
    ChallengePanelComponent,
    UserChallengePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
