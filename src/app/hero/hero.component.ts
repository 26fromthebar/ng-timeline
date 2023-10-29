import { Component, OnInit } from '@angular/core';
import { ChaptersDataService } from '../services/chapters-data';
import { ChapterDetails } from '../shared/classes/chapter-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tl-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  chapter: ChapterDetails | undefined;

  constructor(
    private chaptersData: ChaptersDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let chapterName = this.route.snapshot.data['chapterName'];
    let orderIndex = this.route.snapshot.data['orderIndex'];

    this.chaptersData.getChapterSection(chapterName, orderIndex).subscribe({
      next: (data) => {
        this.chapter = data;
      },
    });
  }
}
