import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChaptersDataService } from '../services/chapters-data';
import { ChapterDetails } from '../shared/classes/chapter-details';

@Component({
  selector: 'tl-next-chapter',
  templateUrl: './next-chapter.component.html',
  styleUrls: ['./next-chapter.component.scss'],
})
export class NextChapterComponent implements OnInit {
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
