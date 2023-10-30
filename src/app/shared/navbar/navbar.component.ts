import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChaptersDataService } from 'src/app/services/chapters-data';
import { IChapterSlim } from '../interfaces/ichapter-slim';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  title: string = 'Menu';
  data: IChapterSlim[] = [];
  sub!: Subscription;
  constructor(private chaptersData: ChaptersDataService) {}

  ngOnInit(): void {
    this.sub = this.chaptersData.getAllChaptersSlim().subscribe({
      next: (data) => (this.data = data),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
