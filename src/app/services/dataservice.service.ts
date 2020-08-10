import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  private productBaseUrl = environment.host;

  constructor(private http: HttpClient) { }

  getSatellites(filter) {
    return this.http.get(this.productBaseUrl + `/satellites?filter=${JSON.stringify(filter)}`);
  }

  searchProducts(key){
    return this.http.get(this.productBaseUrl + `/products?title=${key}`);
  }
}
