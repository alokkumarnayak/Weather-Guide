import { Component, EventEmitter, Input, OnInit, Output, NgModule } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Constants } from 'src/common/Constants';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { GeoLocation } from 'src/common/geoLocation';

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
