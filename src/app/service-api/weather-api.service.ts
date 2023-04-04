import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { WeatherObject } from 'src/common/weather';
import { GeoLocation } from 'src/common/geoLocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { API } from 'src/common/API';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private key: string = 'savelocal';
  allWeather: WeatherObject[] = [];
  updateHome: Subject<any> = new Subject();

  constructor(private http: HttpClient) {
    let localData = localStorage.getItem(this.key);
    if (localData) {
      this.allWeather = JSON.parse(localData);
    }
  }

  getCurrentWeather(lat: string, lon: string): Observable<WeatherObject> {
    return this.http.get<WeatherObject>(API.weatherUrl(lat, lon));
  }

  getGeoLocation(cityName: string): Observable<GeoLocation[]> {
    return this.http.get<GeoLocation[]>(API.geolocationconst(cityName));
  }

  getLocationWeather(cityName: string): Observable<WeatherObject> {
    let weatherObject : WeatherObject;
    return this.getGeoLocation(cityName).pipe(
      switchMap(userData => {
            let sub = this.http.get<WeatherObject>(API.weatherUrl(userData[0].lat.toString(), userData[0].lon.toString())).subscribe((weatherdetail) =>
            {
              weatherObject = weatherdetail;
              weatherObject.name = userData[0].name;
            });
            sub.unsubscribe();
            return of(weatherObject);
          })
      );
    }

  getWeather(cityName: GeoLocation): Observable<WeatherObject> {
    return this.http.get<WeatherObject>(API.weatherUrl(cityName.lat.toString(), cityName.lon.toString()));
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resp => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        err => {
          reject(err);
        }
      );
    });
  }

}
