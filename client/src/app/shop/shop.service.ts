import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IPagination> {
    return this.http.get<IPagination>('https://localhost:5001/api/products');
  }
}
