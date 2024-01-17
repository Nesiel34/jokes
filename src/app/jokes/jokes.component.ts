import { Component } from '@angular/core';
import { JokesService } from './jokes.service';
import { IJokes } from '../models/jokes.interface';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
  providers:[JokesService]
})
export class JokesComponent {

  jokes!:IJokes[];
  constructor(jokesService:JokesService){
    this.jokes = jokesService.jokes;
  }


}
