import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeWeatherComponent } from './core/home-weather/home-weather.component';
import { HomeWeatherModule } from './core/home-weather/home-weather.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeWeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
