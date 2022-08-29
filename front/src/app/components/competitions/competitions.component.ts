import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { LoadListService } from 'src/app/services/load.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css'],
})
export class CompetitionsComponent implements OnInit {
  title = 'List of Competitions';
  listCompetitions: Competition[] = [];

  constructor(private LoadListService: LoadListService) {}

  ngOnInit(): void {
    this.LoadListService.loadData('competitions').subscribe(
      (competitions: any) => {
        this.listCompetitions = competitions;
      }
    );
  }
}
