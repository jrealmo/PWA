import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl = 'https://api.jikan.moe/v4/anime';

  constructor(private http: HttpClient) {}

  getGundamSeries(): Observable<any> {
    const query = 'gundam';
    const sfw = true;

    return this.http.get<any>(`${this.apiUrl}?q=${query}&sfw=${sfw}`);
  }
}

