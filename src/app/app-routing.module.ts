import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWeatherComponent } from 'src/app/home-weather/home-weather.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('src/app/home-weather/home-weather.module').then(m => m.HomeWeatherModule) }];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
