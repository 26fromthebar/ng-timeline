import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChapterSlim } from '../shared/classes/chapter-slim';
import { Observable, filter, find, map, tap } from 'rxjs';
import { ChapterDetails } from '../shared/classes/chapter-details';

@Injectable({
  providedIn: 'root',
})
export class ChaptersDataService {
  constructor(private http: HttpClient) {}

  getAllChaptersSlim(): Observable<ChapterSlim[]> {
    return this.http.get<ChapterSlim[]>(
      '../../assets/data/total-chapters.json'
    );
  }

  getChapterItemsAll(chapterName: string): Observable<ChapterDetails[]> {
    return this.http.get<ChapterDetails[]>(
      `../../assets/data/${chapterName}.json`
    );
  }

  getChapterSection(
    chapterName: string,
    orderIndex: number
  ): Observable<ChapterDetails | undefined> {
    return this.http
      .get<ChapterDetails[]>(`../../assets/data/${chapterName}.json`)
      .pipe(map((data) => data.find((rec) => rec.orderIndex === orderIndex)));
  }
}
