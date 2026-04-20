import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html'
})
export class BatchListComponent implements OnInit {

  batches: any[] = [];

  constructor(private batchService: BatchService) {}

  ngOnInit(): void {
    this.batchService.getAllBatches().subscribe((data: any) => {
      this.batches = data;
    });
  }
}