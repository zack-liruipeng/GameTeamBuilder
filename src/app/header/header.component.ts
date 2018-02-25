import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'TEAMMATE';
  subtitle = 'Build your dream team';
  constructor() { }

  ngOnInit() {
  }

}
