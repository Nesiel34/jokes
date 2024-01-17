import { Component, Input } from '@angular/core';
import { IJokes } from 'src/app/models/jokes.interface';
import {MatDialog} from '@angular/material/dialog';
import { JokesModalComponent } from '../jokes-modal/jokes-modal.component';


@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {

  @Input() joke!:IJokes


  constructor(public dialog: MatDialog) {}


  openJoke(){
   const dialogRef = this.dialog.open(JokesModalComponent, {
      data: this.joke,
    });
  }
}
