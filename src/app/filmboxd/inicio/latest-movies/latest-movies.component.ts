import { Component } from '@angular/core';
import { FilmboxdService } from '../../services/filmboxd.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent {

  constructor(public io: FilmboxdService) {
    this.io.getNowPlayingMoviesFiltered();
  }

  get nowPlayingMoviesFiltered() {
    return this.io.nowPlayingMoviesFiltered;
  }

}
