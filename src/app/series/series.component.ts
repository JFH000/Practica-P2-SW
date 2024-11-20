import { Component, OnInit } from '@angular/core';
import { SeriesModule } from "./series.module";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  imports: [SeriesModule]
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
