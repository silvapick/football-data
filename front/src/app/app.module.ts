import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AreasComponent } from './components/areas/areas.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ImportleagueComponent } from './components/importleague/importleague.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    CompetitionsComponent,
    PlayersComponent,
    TeamsComponent,
    NavComponent,
    HomeComponent,
    ImportleagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
