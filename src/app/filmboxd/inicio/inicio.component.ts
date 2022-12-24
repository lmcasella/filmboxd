import { Component } from '@angular/core';
import { FilmboxdService } from '../services/filmboxd.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(public io: FilmboxdService) { }

  

}
