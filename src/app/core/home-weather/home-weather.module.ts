import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.module';
import { SearchedWeatherComponent } from '../searched-weather/searched-weather.component';
import { WeatherHeaderComponent } from '../weather-header/weather-header.component'; 
import { FavouriteWeatherComponent } from '../favourite-weather/favourite-weather.component'; 
import { PopupWindowComponent } from 'src/app/shared/popup-window/popup-window.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';
import { HomeWeatherRoutingModule } from './home-weather-routing.module';


@NgModule({
  declarations: [
    SearchedWeatherComponent,
    WeatherHeaderComponent,
    FavouriteWeatherComponent,
    PopupWindowComponent,
    MainPageComponent,
    WeatherDetailsComponent
  ],
  exports: [
    SearchedWeatherComponent,
    WeatherHeaderComponent,
    FavouriteWeatherComponent,
    MainPageComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeWeatherRoutingModule,
    MaterialModule
  ]
})
export class HomeWeatherModule { }
