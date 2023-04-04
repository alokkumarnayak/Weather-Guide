import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherObject } from 'src/common/weather';
import { Colors } from 'src/common/Colors';
import { Common } from 'src/common/Common';

@Component({
  selector: 'app-favourite-weather',
  templateUrl: './favourite-weather.component.html',
  styleUrls: ['./favourite-weather.component.scss']
})
export class FavouriteWeatherComponent implements OnInit {

  @Input() errorMessage: string = '';
  @Input() cityclimate: WeatherObject[] = [] ;
  @Input() status: string = '';
  @Input() buttonName: String = '';
  @Output() favouritebtnClick = new EventEmitter<WeatherObject>();
  @Output() removebtnClick = new EventEmitter();
  @Output() onClick = new EventEmitter<WeatherObject>();

  constructor() {
    console.log()
  }

  ngOnInit(): void {
    console.log();
  }

  public changeFavourite(weather: WeatherObject) {
    this.favouritebtnClick.emit(weather);
  }

  public removall() {
    this.removebtnClick.emit();
  }

  public Click(weather: WeatherObject) {
    this.onClick.emit(weather);
  }

  getbackgroundColor(index: number) {
    return this.cityclimate[index].isSetHome
      ? Colors.GeneralColors.Transparent2
      : Colors.GeneralColors.Transparent1;
  }

  getTitleColor(index: number) {
    return this.cityclimate[index].isSetHome
      ? Colors.GeneralColors.Theme_Color
      : Colors.GeneralColors.Text_secondary;
  }

  getIcon(index: number): string {
    return Common.GetIcon(this.cityclimate[index].weather[0].icon, 'small');
  }

  getWeatherDescription(index: number): string {
    if (this.cityclimate[index].weather[0].description == undefined) {
      return '';
    }
    return this.cityclimate[index].weather[0].description;
  }

  public changeFavouritefromList(index: number) {
    this.favouritebtnClick.emit(this.cityclimate[index]);
  }

  getbuttonImage(index: number): String {
    return this.cityclimate[index].isFavourite
      ? 'assets/images/icons/icon_favourite_Active.png'
      : 'assets/images/icons/icon_favourite_InActive.png';
  }

}
