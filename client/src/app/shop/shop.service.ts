import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IPagination> {
    return this.http.get<IPagination>('https://localhost:5001/api/products');
  }

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>('https://localhost:5001/api/products/brands');
  }

  getTypes(): Observable<IType[]> {
    return this.http.get<IType[]>('https://localhost:5001/api/products/types');
  }
}
