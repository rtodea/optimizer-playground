import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ng2-cookies';
import { CookieInfoComponent } from './cookie-info/cookie-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CookieInfoComponent,
  ],
  declarations: [
    HomeComponent,
    CookieInfoComponent,
  ],
  providers: [
    CookieService
  ],
})
export class CoreModule { }
