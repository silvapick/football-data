import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { LoadListService } from 'src/app/services/load.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  title = 'List of Players';
  listPlayers: Player[] = [];

  constructor(private LoadListService: LoadListService) {}

  ngOnInit(): void {
    this.LoadListService.loadData('players').subscribe((players: any) => {
      this.listPlayers = players;
    });
  }
}
