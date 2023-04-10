import { Component,Input } from '@angular/core';
import { WeatherObject } from 'src/app/shared/weather';
import { GeoLocation } from 'src/app/shared/geoLocation';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { Constants } from 'src/app/shared/Constants';
import { PopupWindowComponent } from '../shared/popup-window/popup-window.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {

  @Input() cityclimate: WeatherObject[] = [];
  today: number = Date.now();
  selectedWeather?: WeatherObject;
  allWeather: WeatherObject[] = [];
  cities: GeoLocation[] = [];
  Weather?: WeatherObject;
  favWeather: WeatherObject[] = this.weatherApiService.allWeather?.filter(obj => {
      return obj.isFavourite === true;
    });
  
  dialogRef?: MatDialogRef<PopupWindowComponent>;
  readonly Constants = Constants;

  public userSearch: string = '';
  private key: string = 'savelocal';

  constructor(private router: Router, public readonly dialog: MatDialog, private weatherApiService: WeatherApiService) {}

  ngOnChanges() {}

  ngOnInit(): void {
    this.getListFromLocalStorage();
    this.getCurrentSelectedWeather();
    this.weatherApiService.updateHome.subscribe(weather => {
      this.selectedWeather = weather;
    });
  }

  getListFromLocalStorage() {
    this.allWeather = this.weatherApiService.allWeather;

    if (this.allWeather && this.allWeather.length > 0) {
      this.selectedWeather = this.allWeather.filter(obj => {
        return obj.isSetHome === true;
      })[0];
    }
  }

  getCurrentCityWeather(): void {
    this.weatherApiService.getPosition().then(pos => {
      this.weatherApiService
        .getCurrentWeather(pos.lat.toString(), pos.lng.toString())
        .subscribe((cityWeather: WeatherObject) => {
          this.SetToHome(cityWeather);
          cityWeather.isSetHome = true;
          this.addCitytogroup(cityWeather);
        });
    });
  }

  getSearchCityWeather(cityName: string): void {
    this.weatherApiService.getLocationWeather(cityName).subscribe((cityWeather: WeatherObject) => {
      cityWeather.isFromSearch = true;
      this.SetToHome(cityWeather);
      cityWeather.isSetHome = true;
      this.addCitytogroup(cityWeather);
    });
  }

  getCityWeather(location: GeoLocation): void {
    this.weatherApiService.getWeather(location).subscribe((cityWeather: WeatherObject) => {
      cityWeather.isFromSearch = true;
      this.SetToHome(cityWeather);
      cityWeather.isSetHome = true;
      this.addCitytogroup(cityWeather);
    });
  }

  getCitiesBySearch(cityName: any): void {
    if (typeof cityName === 'string') {
      this.weatherApiService.getGeoLocation(cityName).subscribe(x => {
        this.cities = x.filter(obj => {
          return obj.name.toLowerCase().replace(/\s/g, '').includes(cityName.replace(/\s/g, '').toLowerCase());
        });
      });
    } else {
      this.getCityWeather(cityName);
    }
  }

  getFaviouriteStatus(): string {
    return `${this.getFavouiteCities().length}`.toString() + Constants.cityAdded;
  }

  clearAllFavourites() {
    this.dialogRef = this.dialog.open(PopupWindowComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmationString = Constants.removeAll;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.weatherApiService.allWeather.forEach(function (value) {
          value.isFavourite = false;
        });
        this.allWeather = this.weatherApiService.allWeather.filter(obj => {
          return obj.isFavourite != true;
        });
      }
      if (this.allWeather.length <= 0) {
        this.getCurrentCityWeather();
      }
    });
  }

  clearRecentSearch() {
    this.dialogRef = this.dialog.open(PopupWindowComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmationString = Constants.clearAll;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.weatherApiService.allWeather = [];
        this.getCurrentCityWeather();
      }
    });
  }

  changeFav() {
    if (this.selectedWeather == undefined) {
      return;
    }
    this.selectedWeather.isFavourite = !this.selectedWeather.isFavourite;
    
  }

  changeFavourite(weather: WeatherObject) {
    weather.isFavourite = !weather.isFavourite;
  }

  getCurrentSelectedWeather() {
    if (this.selectedWeather == undefined) {
      this.getCurrentCityWeather();
    }
  }

  addCitytogroup(weather: WeatherObject) {
    var exist = this.allWeather.find(x => x.id == weather.id);
    if (exist == null) {
      this.weatherApiService.allWeather.push(weather);
    }
  }

  public getFavouiteCities(): WeatherObject[] {
    return this.weatherApiService.allWeather?.filter(obj => {
      return obj.isFavourite === true;
    });
  }

  getSearchedCities(): WeatherObject[] {
    return this.weatherApiService.allWeather?.filter(obj => {
      return obj.isFromSearch === true;
    });
  }

  SetToHome(weather: WeatherObject) {
    if (this.selectedWeather) {
      this.selectedWeather.isSetHome = false;
    }
    weather.isSetHome = true;
    this.selectedWeather = weather;
    localStorage.setItem(this.key, JSON.stringify(this.weatherApiService.allWeather));
  }

  

  

 

}
