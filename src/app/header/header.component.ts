import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/navitems.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = [
    new NavItem('News Agencies', 'news-agencies'),
    new NavItem('Journalists', 'journalists'),
    new NavItem('Newspapers', 'newspapers'),
    new NavItem('TV', 'tv'),
    new NavItem('Politicians', 'politicians'),
    new NavItem('Tweeters', 'tweeters')
  ];

  constructor() { }

  ngOnInit() {
  }

}
