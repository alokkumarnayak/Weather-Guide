import { Component, OnInit } from '@angular/core';
import { WeatherObject } from 'src/common/weather';
import { GeoLocation } from 'src/common/geoLocation';
import { Constants } from 'src/common/Constants';
import { WeatherApiService } from 'src/app/service-api/weather-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss']
})
export class HomeWeatherComponent implements OnInit {

  today: number = Date.now();
  selectedWeather?: WeatherObject;

  cities: GeoLocation[] = [];

  readonly Constants = Constants;

  public userSearch: string = '';
  private key: string = 'savelocal';

  constructor(private router: Router, private weatherApiService: WeatherApiService) {}

  ngOnChanges() {}

  ngOnInit(): void {}

  getCityWeather(location: GeoLocation): void {
    this.weatherApiService.getWeather(location).subscribe((cityWeather: WeatherObject) => {
      cityWeather.isFromSearch = true;
      cityWeather.name = location.name;
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

  addCitytogroup(weather: WeatherObject) {
    var exist = this.weatherApiService.allWeather.find(x => x.id == weather.id);
    if (exist == null) {
      this.weatherApiService.allWeather.push(weather);
    }
  }

  SetToHome(weather: WeatherObject) {
    localStorage.setItem(this.key, JSON.stringify(this.weatherApiService.allWeather));
    this.weatherApiService.updateHome.next(weather);
  }

}
