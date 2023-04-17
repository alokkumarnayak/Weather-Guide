import { Component, EventEmitter, Input, OnInit, Output, NgModule } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Constants } from 'src/app/shared/Constants';
import { GeoLocation } from 'src/app/shared/geoLocation';

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss']
})
export class WeatherHeaderComponent implements OnInit {
  placeholder: string = Constants.searchPlaceHolder;
  userSearch: string = '';
  userSearchUpdate = new Subject<string>();

  readonly Constants = Constants;

  @Input() cityList: GeoLocation[] = [];
  selectedCity?: GeoLocation;
  @Output() searchValue = new EventEmitter<any>();

  constructor() {
    console.log('WeatherHeader Component Started');
    this.userSearchUpdate
      .pipe(debounceTime(1000)) //distinctUntilChanged()
      .subscribe((value) => {
        if (value) {
          this.cityList = [];
          this.searchValue.emit(value);
        }
      });
  }

  ngOnInit(): void {}

  displayFn(loc: GeoLocation): string {
    return loc?.name;
  }
}
