import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { LoadListService } from 'src/app/services/load.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent implements OnInit {
  listAreas: Area[] = [];
  title = 'List of Areas';

  constructor(private LoadListService: LoadListService) {}

  ngOnInit(): void {
    this.LoadListService.loadData('areas').subscribe((areas: any) => {
      this.listAreas = areas;
    });
  }
}
