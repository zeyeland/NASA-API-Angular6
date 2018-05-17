import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Nasa } from './nasa';


@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private url = "https://api.nasa.gov/planetary/apod?api_key=";
  private nasaKey = "TUnEr2TBPZYgea1CdKbuBxj1lRdBdsRQKoQEGlke";
  constructor(private http: HttpClient) { }

  getApod(date:string): Observable<Nasa>{
    return this.http.get<Nasa>(`${this.url}${this.nasaKey}&date=${date}`);
  }
}
