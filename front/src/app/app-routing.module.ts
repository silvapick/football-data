import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AreasComponent } from './components/areas/areas.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'areas', component: AreasComponent},
  { path: 'area/:id', component: AreasComponent},
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'competition/:id', component: CompetitionsComponent},
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamsComponent },
  { path: 'players', component: PlayersComponent},
  { path: 'players:id', component: PlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
