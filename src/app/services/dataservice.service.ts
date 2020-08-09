import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  private productBaseUrl = environment.host;

  constructor(private http: HttpClient) { }


  getFilters() {
    return this.http.get(this.productBaseUrl + `/filters`);
  }
  
  getProducts() {
    return this.http.get(this.productBaseUrl + `/products`);
  }

  searchProducts(key){
    return this.http.get(this.productBaseUrl + `/products?title=${key}`);
  }
}
