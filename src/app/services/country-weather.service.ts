import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryWeatherService {
  private countryApiUrl = 'https://restcountries.com/v2/all';
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private weatherApiKey = 'd5dcb8ff5ca495631b47c51add2ae8c2';

  constructor(private http: HttpClient) { }

  // Fetches list of all countries
  getCountries(): Observable<any> {
    return this.http.get<any>(this.countryApiUrl);
  }

  // Fetches weather details based on the country name
  getWeather(countryName: string): Observable<any> {
    const url = `${this.weatherApiUrl}?q=${countryName}&appid=${this.weatherApiKey}`;
    return this.http.get<any>(url);
  }
}
