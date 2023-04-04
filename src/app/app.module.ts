import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule} from '@angular/material/divider';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { WeatherHeaderComponent } from './weather-header/weather-header.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FavouriteWeatherComponent } from './favourite-weather/favourite-weather.component';
import { SearchedWeatherComponent } from './searched-weather/searched-weather.component';

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
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
