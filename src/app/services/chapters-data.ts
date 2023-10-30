import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { IChapterSlim } from '../shared/interfaces/ichapter-slim';
import { IChapterDetails } from '../shared/interfaces/ichapter-details';

@Injectable({
  providedIn: 'root',
})
export class ChaptersDataService {
  private _chaptersSlim: IChapterSlim[] = [];
  // get chaptersSlim() {
  //   return this._chaptersSlim;
  // }

  constructor(private http: HttpClient) {}

  getAllChaptersSlim(): Observable<IChapterSlim[]> {
    if (this._chaptersSlim.length > 0) {
      console.log('From cached array');
      return of(this._chaptersSlim);
    } else {
      console.log('From http request');
      return this.http
        .get<IChapterSlim[]>('../../assets/data/total-chapters.json')
        .pipe(tap((data) => (this._chaptersSlim = data)));
    }
  }

  getChapterItemsAll(chapterName: string): Observable<IChapterDetails[]> {
    return this.http.get<IChapterDetails[]>(
      `../../assets/data/${chapterName}.json`
    );
  }

  getChapterSection(
    chapterName: string,
    orderIndex: number
  ): Observable<IChapterDetails | undefined> {
    return this.http
      .get<IChapterDetails[]>(`../../assets/data/${chapterName}.json`)
      .pipe(map((data) => data.find((rec) => rec.orderIndex === orderIndex)));
  }
}
