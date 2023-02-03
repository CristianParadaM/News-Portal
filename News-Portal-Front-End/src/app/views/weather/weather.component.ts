import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{

  protected weather$: Observable<any>;
  protected formWeather: FormGroup;
  protected selectedCountry: FormControl;
  protected city: FormControl;
  
  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) {
    this.selectedCountry = new FormControl('us');
    this.city = new FormControl('', [Validators.required]);
    this.formWeather = this.formBuilder.group({
      city: this.city,
      country: this.selectedCountry
    })
  }

  getErrorMessageCity() {
    return this.city.hasError('required') ? 'You must enter some value' : '';
  }

  search() {
    this.weather$ = this.weatherService.getWeather(this.city.value, this.selectedCountry.value);
    this.weather$.subscribe(r=>console.log(r));
  }

}
