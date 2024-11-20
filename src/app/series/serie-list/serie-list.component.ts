import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  standalone:false,
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0;
  selectedSerie?: Serie;

  constructor(private seriesService: SerieService) {}

  getSeries(): void{
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.calculateAverageSeasons(data);
    });
  }

  private calculateAverageSeasons(series:Array<Serie>): number {
    let out: number = 0;
    let acum: number = 0;
    let cont: number = 0;
    for(let serie of series){
        acum += serie.seasons;
        cont += 1;
    }
    out = acum/cont;
    return out;
  }

  onSelect(serie: Serie): void {
      this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }
}
