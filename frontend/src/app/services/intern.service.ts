import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class InternService {

  private baseUrl = 'http://localhost:8080/interns';

  constructor(private http: HttpClient) {}

  addIntern(data: any, batchId: number) {
    return this.http.post(`${this.baseUrl}?batchId=${batchId}`, data);
  }

  getAllInterns() {
    return this.http.get(this.baseUrl);
  }

  deleteIntern(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  searchByName(name: string) {
    return this.http.get(`${this.baseUrl}/search?name=${name}`);
  }

  filterByBatch(batchId: number) {
    return this.http.get(`${this.baseUrl}/filter/batch?batchId=${batchId}`);
  }

  filterByType(type: string) {
    return this.http.get(`${this.baseUrl}/filter/type?type=${type}`);
  }
}