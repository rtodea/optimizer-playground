import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    if (!this.angulartics2GoogleAnalytics) {
      console.log('init process failed for Google Analytics');
    }
  }
}
