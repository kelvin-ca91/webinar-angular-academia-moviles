import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lo-mas-top',
  templateUrl: './lo-mas-top.component.html',
  styleUrls: ['./lo-mas-top.component.scss'],
})
export class LoMasTopComponent implements OnInit {
  listaMasTop: any[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.loadLoMasPopular();
  }

  private async loadLoMasPopular() {
    try {
      this.listaMasTop = await this.movieService.listaLoMasPoPular();
      this.listaMasTop = this.listaMasTop.map((item) => ({
        ...item,
        poster_path: `${environment.baseUrlImg}${item.poster_path}`,
      }));
    } catch (error) {
      console.error(error);
    }
  }
}
