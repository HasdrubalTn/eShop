import { HttpClient, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopparams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams): Observable<IPagination> {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

    return this.http.get<IPagination>('https://localhost:5001/api/products', {observe: 'response', params})
    .pipe(map(response => response.body));
  }

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>('https://localhost:5001/api/products/brands');
  }

  getTypes(): Observable<IType[]> {
    return this.http.get<IType[]>('https://localhost:5001/api/products/types');
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://localhost:5001/api/products/${id}`);
  }
}
