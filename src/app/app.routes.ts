import { Routes } from '@angular/router';
import { ChallengePanelComponent } from 'src/components/challenge/challenge-panel/challenge-panel.component';
import { EventPanelComponent } from 'src/components/event/event-panel/event-panel.component';
export const routes: Routes = [
    {path:'event', component: EventPanelComponent},
    {path:'challenge', component: ChallengePanelComponent, data:{eventId:undefined}},
]