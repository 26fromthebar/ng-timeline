import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tl-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss'],
})
export class NavButtonsComponent implements OnInit {
  @Input() nextPageUrl: string = '/';
  @Input() prevPageUrl: string = '/';

  constructor() {}

  ngOnInit(): void {}
}
