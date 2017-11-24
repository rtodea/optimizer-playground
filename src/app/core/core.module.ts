import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ng2-cookies';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    CookieService
  ],
})
export class CoreModule { }
