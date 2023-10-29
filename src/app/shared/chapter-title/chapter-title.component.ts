import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tl-chapter-title',
  templateUrl: './chapter-title.component.html',
  styleUrls: ['./chapter-title.component.scss'],
})
export class ChapterTitleComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
