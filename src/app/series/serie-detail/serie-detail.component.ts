import { Component, Input } from '@angular/core';
import { Serie } from '../serie';

@Component({
  standalone:false,
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent {

  @Input() serie?: Serie;

}
