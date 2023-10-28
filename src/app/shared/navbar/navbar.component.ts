import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'Menu';
  constructor() {}

  ngOnInit(): void {}
}
