import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWeatherComponent } from 'src/app/home-weather/home-weather.component';

const routes: Routes = [{ path: '', component: HomeWeatherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeWeatherRoutingModule { }
