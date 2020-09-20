import { HttpClient, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number): Observable<IPagination> {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    return this.http.get<IPagination>('https://localhost:5001/api/products', {observe: 'response', params})
    .pipe(
      map(response => response.body)
    );
  }

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>('https://localhost:5001/api/products/brands');
  }

  getTypes(): Observable<IType[]> {
    return this.http.get<IType[]>('https://localhost:5001/api/products/types');
  }
}
