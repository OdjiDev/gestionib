

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StockDto } from '../classes/stock-dto';

@Injectable({
  providedIn: 'root'
})
export class StockService {

 private baseURL= environment.baseURL+ "mvtstks";

  constructor(private httpClient: HttpClient) { }

  getStocks(): Observable<StockDto[]>{
    return this.httpClient.get<StockDto[]>(`${this.baseURL}/list`);
  }

  getStockById(id: number): Observable<StockDto>{
    return this.httpClient.get<StockDto>(`${this.baseURL}/${id}`);
  }


  addStock(stockDto: StockDto): Observable<StockDto>{
    return this.httpClient.post<StockDto>(`${this.baseURL}`, stockDto);
  }

  reduireStock(stockDto: StockDto): Observable<StockDto>{
    return this.httpClient.post<StockDto>(`${this.baseURL}/reduire`, stockDto);
  }

  // updateStock(id: number, stockDto: StockDto): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/update/${id}`, StockDto);
  // }


  updateStock(id: number, stock: StockDto): Observable<StockDto> {
    return this.httpClient.put<StockDto>(`${this.baseURL}/${id}`, stock);
  }

  deleteStock(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
