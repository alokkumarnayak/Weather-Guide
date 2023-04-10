import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { HomeWeatherComponent } from '../home-weather/home-weather.component';
import { FavouriteWeatherComponent } from '../favourite-weather/favourite-weather.component';
import { SearchedWeatherComponent } from '../searched-weather/searched-weather.component';
  

const routes: Routes = [
  { path: 'home',component: HomeWeatherComponent},
  { path: 'favourite', component: FavouriteWeatherComponent },
  { path: 'recentSearch', component: SearchedWeatherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherDetailsRoutingModule { }
