import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BatchService {

  private baseUrl = 'http://localhost:8080/batches';

  constructor(private http: HttpClient) {}

  getAllBatches() {
    return this.http.get(this.baseUrl);
  }

  createBatch(batch: any) {
  return this.http.post(
    `http://localhost:8080/batches?startDate=${batch.startDate}`,
    {}
  );
}
}