import { Rocket } from './rocket';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { of } from 'rxjs';

import * as uuid from 'uuid/v1';

const BASE_URL = 'https://api.spacexdata.com/v3'

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
model = 'rockets'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(rocket: Rocket) {
    return of(({ id: uuid(), ...rocket }));
  }

  delete(rocket: Rocket) {
    return this.httpClient.delete(this.getUrlForId(rocket.id));
  }

  update(rocket: Rocket) {
    return this.httpClient.put(this.getUrlForId(rocket.id), rocket);
  }
}
