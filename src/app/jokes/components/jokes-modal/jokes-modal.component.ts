import { Component, Inject, Input, OnInit } from '@angular/core';
import { IJokes } from 'src/app/models/jokes.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JokesService } from '../../jokes.service';

@Component({
  selector: 'app-jokes-modal',
  templateUrl: './jokes-modal.component.html',
  styleUrls: ['./jokes-modal.component.scss'],
  providers:[JokesService]
})
export class JokesModalComponent implements OnInit {
  suggested!: IJokes[];
  suggestedJoke: IJokes[] = [];
  constructor(
    public dialogRef: MatDialogRef<JokesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public joke: IJokes,
    private jokesService: JokesService
  ) {}

  ngOnInit(): void {
    this.suggested = this.jokesService.jokes.filter(
      (f) => f.type === this.joke.type
    );
    for (let i = 0; i < 3; i++) {
      let randomJoke = -1;
      do {
        randomJoke = Math.floor(Math.random() * this.suggested.length);
      } while (
        !this.suggested.some((s) => s.id === this.suggested[randomJoke].id)
      );
      this.suggestedJoke.push(this.suggested[randomJoke]);
    }

  }

}
