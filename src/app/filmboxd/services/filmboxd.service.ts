import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmboxdService {

  private apiKey: string = '672cf981f26556429d330263b9dcd3f5';
  public nowPlayingMovies: any[] = [];
  public nowPlayingMoviesFiltered: any[] = [];
  public trendingFilms: any[] = [];

  constructor(private http: HttpClient) {}

  getNowPlayingMovies() {
    this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=es-MX&page=1`).subscribe((response: any) => {
      this.nowPlayingMovies = response.results;
      console.log("Latest: ",this.nowPlayingMovies);
    })
  }

  getNowPlayingMoviesFiltered() {
    this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=es-MX&page=1`).subscribe((response: any) => {
      this.nowPlayingMovies = response.results;
      this.nowPlayingMoviesFiltered = this.nowPlayingMovies.slice(0,6);
      console.log("Latest: ",this.nowPlayingMoviesFiltered);
    })
    
  }

  getTrendingFilms() {
    this.http.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.apiKey}&language=es-MX&page=1`).subscribe((response: any) => {
      this.trendingFilms = response.results;
      console.log("Trending: ",this.trendingFilms);
    })
  }
}