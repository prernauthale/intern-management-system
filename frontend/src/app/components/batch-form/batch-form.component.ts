import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-batch-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './batch-form.component.html'
})
export class BatchFormComponent {

  batch: any = {
    startDate: ''
  };

  constructor(private batchService: BatchService) {}

  submit() {
  console.log("Sending:", this.batch);

  this.batchService.createBatch(this.batch).subscribe({
    next: () => {
      alert('Batch Created ✅');
    },
    error: (err) => {
      console.error(err);
      alert('Error ❌');
    }
  });
}
}