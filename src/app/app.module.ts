import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { WeatherHeaderComponent } from './weather-header/weather-header.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { PopupWindowComponent } from './shared/popup-window/popup-window.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FavouriteWeatherComponent } from './favourite-weather/favourite-weather.component';
import { SearchedWeatherComponent } from './searched-weather/searched-weather.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeWeatherComponent,
    WeatherHeaderComponent,
    WeatherDetailsComponent,
    PopupWindowComponent,
    MainPageComponent,
    FavouriteWeatherComponent,
    SearchedWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
