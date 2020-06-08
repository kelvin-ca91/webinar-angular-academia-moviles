import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Output() clickSelectMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectMovie(id: number) {
    this.clickSelectMovie.emit(id);
  }
}
