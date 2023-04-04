import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedWeatherComponent } from './searched-weather.component';

describe('SearchedWeatherComponent', () => {
  let component: SearchedWeatherComponent;
  let fixture: ComponentFixture<SearchedWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
