import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'observable-events',
  templateUrl: './observable-events.component.html',
  styleUrls: ['./observable-events.component.css']
})
export class ObservableEventsComponent {

  private appId: string = 'de9a7b348517cb9d6d0b946c61ce3049';
  private baseWeatherURL: string = 'http://api.openweathermap.org/data/2.5/find?q=';
  private urlSuffix: string = `&units=imperial&appid=${this.appId}`;

  searchInput: FormControl = new FormControl('');
  temperature: string;

  constructor(private http: Http) {

    this.searchInput.valueChanges
      .debounceTime(500)
      .switchMap(city => this.getWeather(city))
      .subscribe(
        res => {
          if (res['cod'] === '404') return;
          if (!res.list) {
            this.temperature = 'City is not found';
            console.log(res);
          } else {
            this.temperature = `Current temperature is ${res.list[1].main.temp}F, ` + `humidity: ${res.list[1].main.humidity}%`;
          }
        },
        err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url),
        () => console.log(`Weather is retieved`)
      );
  }

  getWeather(city: string): Observable<string[]> {
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
      .map(res => {
        console.log(res);
        return res.json()
      });
  }
}
