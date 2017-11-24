import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  cookieInfo = '';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieInfo = JSON.stringify(this.cookieService.get('_gaexp'));
  }
}
