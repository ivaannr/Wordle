import { environmentProd as env } from '../enviroment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DictionaryResponse } from '../model/dtos/dictionaryResponse';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  
  constructor(private http: HttpClient) {}

  search(word: string): Observable<DictionaryResponse> {
    return this.http.get<DictionaryResponse>(`${env.dictionaryUrl}${word}`);
  }

  exists(word: string): Observable<boolean> {
    return this.search(word).pipe(
      map((data: DictionaryResponse) => {
        return data.entries && data.entries.length > 0;
      }),
      catchError(() => of(false))
    );
  }
}
