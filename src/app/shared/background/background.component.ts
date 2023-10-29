import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tl-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  @Input() imgSrc: string = '';
  @Input() altText = '';

  constructor() {}

  ngOnInit(): void {}
}
