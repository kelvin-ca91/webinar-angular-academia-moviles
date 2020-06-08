import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private masPopularUrl = `${environment.baseUrl}/movie/top_rated${environment.apiKey}`;
  constructor(private http: HttpClient) {}

  listaLoMasPoPular() {
    return this.http
      .get(this.masPopularUrl)
      .pipe(
        map((response: any) => {
          // if (response.results.length > 200) {
          return response.results;
          // }
          // throw new Error('No hay 200 peliculas');
        })
      )
      .toPromise();
  }
}
