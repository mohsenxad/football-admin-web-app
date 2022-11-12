import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChallengePanelComponent } from 'src/components/challenge/challenge-panel/challenge-panel.component';
import { EventPanelComponent } from 'src/components/event/event-panel/event-panel.component';
import { UserChallengePanelComponent } from 'src/components/user-challenge/user-challenge-panel/user-challenge-panel.component';
import { UserPanelComponent } from 'src/components/user/user-panel/user-panel.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventListComponent } from '../components/event/event-list/event-list.component';
import { EventListItemComponent } from '../components/event/event-list-item/event-list-item.component';
import { ChallengeListComponent } from '../components/challenge/challenge-list/challenge-list.component';
import { ChallengeListItemComponent } from '../components/challenge/challenge-list-item/challenge-list-item.component';
import { AddChallengeComponent } from 'src/components/challenge/add-challenge/add-challenge.component';
import { EditChallengeComponent } from 'src/components/challenge/edit-challenge/edit-challenge.component';
import { AddEventComponent } from 'src/components/event/add-event/add-event.component';
import { EditEventComponent } from 'src/components/event/edit-event/edit-event.component';

import { registerLocaleData } from '@angular/common';
import localeFa from '@angular/common/locales/fa';
import { ChallengeOptionListItemComponent } from 'src/components/challengeOption/challenge-option-list-item/challenge-option-list-item.component';
import { ChallengeOptionListComponent } from 'src/components/challengeOption/challenge-option-list/challenge-option-list.component';

registerLocaleData(localeFa);


@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    EventPanelComponent,
    ChallengePanelComponent,
    UserChallengePanelComponent,
    EventListComponent,
    EventListItemComponent,
    ChallengeListComponent,
    ChallengeListItemComponent,
    AddChallengeComponent,
    AddEventComponent,
    EditEventComponent,
    EditChallengeComponent,
    ChallengeOptionListComponent,
    ChallengeOptionListItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
