import { TestBed } from '@angular/core/testing';

import { CountryWeatherService } from './country-weather.service';

describe('CountryWeatherService', () => {
  let service: CountryWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
