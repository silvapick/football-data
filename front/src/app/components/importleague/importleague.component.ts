import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadListService } from 'src/app/services/load.service';

@Component({
  selector: 'app-importleague',
  templateUrl: './importleague.component.html',
  styleUrls: ['./importleague.component.css'],
})
export class ImportleagueComponent implements OnInit {
  listData: [] = [];
  code = '';
  url = '';

  constructor(
    private LoadListService: LoadListService,
    private routeActived: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.code = this.routeActived.snapshot.params['code']
    this.url = 'importLeague/' + this.code + '/teams'

    this.LoadListService.loadData(this.url).subscribe((data: any) => {
      this.listData = data

    });
  }
}
