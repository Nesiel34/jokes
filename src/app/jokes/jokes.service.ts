import { Injectable } from '@angular/core';
import { IJokes } from '../models/jokes.interface';
import jokes from '../../assets/jokes.json';

@Injectable()
export class JokesService {


  public jokes!:IJokes[];

  constructor() {
    this.jokes = jokes;
  }
}
