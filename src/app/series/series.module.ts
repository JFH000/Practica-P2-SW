import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieListComponent } from './serie-list/serie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieListComponent, SerieDetailComponent],
  declarations: [SerieListComponent, SerieDetailComponent]
})
export class SeriesModule { }
