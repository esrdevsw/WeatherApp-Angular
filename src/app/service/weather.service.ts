import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherAPIbaseURL, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeytHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('aggregateHours', 24)
        .set('locationMode', 'single')
        .set('location', cityName)
        .set('contentType', 'json')
        .set('unitGroup', 'metric')
        .set('shortColumnNames', false)
    })
  }

}
