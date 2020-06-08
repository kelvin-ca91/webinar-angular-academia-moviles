import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lo-mas-popular',
  templateUrl: './lo-mas-popular.component.html',
  styleUrls: ['./lo-mas-popular.component.scss'],
})
export class LoMasPopularComponent implements OnInit {
  listaMasPopular: any[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.loadLoMasPopular();
  }

  private async loadLoMasPopular() {
    try {
      this.listaMasPopular = await this.movieService.listaLoMasPoPular();
      this.listaMasPopular = this.listaMasPopular.map((item) => ({
        ...item,
        poster_path: `${environment.baseUrlImg}${item.poster_path}`,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  removeMovie(id: number) {
    const index = this.listaMasPopular.findIndex((item) => item.id === id);
    this.listaMasPopular.splice(index, 1);
  }
}
