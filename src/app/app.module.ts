import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './details/about/about.component';
import { CoreModule } from './core/core.module';
import { DetailsModule } from './details/details.module';

const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    CoreModule,
    DetailsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
