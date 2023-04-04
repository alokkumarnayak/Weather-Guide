import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteWeatherComponent } from './favourite-weather.component';

describe('FavouriteWeatherComponent', () => {
  let component: FavouriteWeatherComponent;
  let fixture: ComponentFixture<FavouriteWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
