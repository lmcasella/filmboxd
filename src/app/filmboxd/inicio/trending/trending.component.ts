import { Component } from '@angular/core';
import { FilmboxdService } from '../../services/filmboxd.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {

  constructor(public io: FilmboxdService) {
    this.io.getTrendingFilms();
  }

  get trendingFilms() {
    return this.io.trendingFilms;
  }

}
