import { Routes } from '@angular/router';
import { AddChallengeComponent } from 'src/components/challenge/add-challenge/add-challenge.component';
import { ChallengePanelComponent } from 'src/components/challenge/challenge-panel/challenge-panel.component';
import { EditChallengeComponent } from 'src/components/challenge/edit-challenge/edit-challenge.component';
import { AddEventComponent } from 'src/components/event/add-event/add-event.component';
import { EditEventComponent } from 'src/components/event/edit-event/edit-event.component';
import { EventPanelComponent } from 'src/components/event/event-panel/event-panel.component';
export const routes: Routes = [
    {path:'event', component: EventPanelComponent},
    {path:'event/add', component: AddEventComponent},
    {path:'event/edit', component: EditEventComponent, data:{eventId:undefined}},
    {path:'challenge', component: ChallengePanelComponent, data:{eventId:undefined}},
    {path:'challenge/add', component: AddChallengeComponent, data:{eventId:undefined}},
    {path:'challenge/edit', component: EditChallengeComponent, data:{eventId:undefined, challengeId:undefined}},
]