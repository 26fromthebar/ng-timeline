import { Component, OnInit } from '@angular/core';
import { ChaptersDataService } from 'src/app/services/chapters-data';
import { ChapterSlim } from '../classes/chapter-slim';

@Component({
  selector: 'tl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'Menu';
  data: ChapterSlim[] = [];
  sub!: PushSubscription;
  constructor(private chaptersData: ChaptersDataService) {}

  ngOnInit(): void {
    this.chaptersData.getAllChaptersSlim().subscribe({
      next: (data) => (this.data = data),
      error: (err) => console.log(err),
    });
  }
}
