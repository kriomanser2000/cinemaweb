import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OmdbService 
{
  private apiKey = 'YOUR_OMDB_API_KEY';
  private apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`;
  constructor(private http: HttpClient) { }
  getMovie(title: string): Observable<any> 
  {
    const url = `${this.apiUrl}&t=${title}`;
    return this.http.get<any>(url);
  }
}