import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoadListService {
  constructor(private httpClient: HttpClient) {}

  loadData(url: string) {
    return this.httpClient.get<any>('http://localhost:3333/' + url);
  }
}
