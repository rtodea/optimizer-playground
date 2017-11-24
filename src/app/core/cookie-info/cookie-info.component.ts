import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.css']
})
export class CookieInfoComponent implements OnInit {
  info: String;

  ANALYTICS_EXPERIMENTS_KEY = '_gaexp';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.info = this.cookieService.get(this.ANALYTICS_EXPERIMENTS_KEY);
  }

}
