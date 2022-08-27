import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/teams.model';
import { LoadListService } from 'src/app/services/load.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  title = 'List of Teams'
  listTeams: Team[] = []

  constructor(
    private LoadListService: LoadListService
  ) { }

  ngOnInit(): void {

    this.LoadListService.loadData('teams')
      .subscribe(
        (teams: any) => {
          this.listTeams = teams
        }
    )
  }
}
