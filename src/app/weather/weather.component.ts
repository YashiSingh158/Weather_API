import { Component, OnInit } from '@angular/core';
import { CountryWeatherService } from '../services/country-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  countries: any[] = [];
  selectedCountry: string = '';
  weatherData: any = null;

  constructor(private countryWeatherService: CountryWeatherService) {}

  ngOnInit(): void {
    // Fetch countries when the component is initialized
    this.countryWeatherService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  // Method triggered when a country is selected
  // onCountrySelect(): void {
  //   if (this.selectedCountry) {
  //     this.countryWeatherService.getWeather(this.selectedCountry).subscribe(data => {
  //       this.weatherData = data;
  //     });
  //   }
  // }

  onCountrySelect(): void 
  {
    if (this.selectedCountry) {
      this.countryWeatherService.getWeather(this.selectedCountry).subscribe(data => {
        this.weatherData = data;
  
        // Push event to dataLayer
        window.dataLayer.push({
          event: 'weatherDataLoaded',
          country: this.selectedCountry,
          temperature: this.weatherData.main.temp - 273.15,
          weatherDescription: this.weatherData.weather[0].description,
        });
  
        console.log('Weather data loaded event pushed for:', this.selectedCountry);
      });
    }
  }

}
