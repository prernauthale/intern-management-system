import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InternService } from '../../services/intern.service';
import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-intern-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './intern-form.component.html'
})
export class InternFormComponent implements OnInit {

  intern: any = {
    name: '',
    email: '',
    mobile: '',
    idCardType: 'Free',
    dateOfJoining: '',
    batchId: ''
  };

  batches: any[] = [];

  constructor(
    private internService: InternService,
    private batchService: BatchService
  ) {}

  ngOnInit(): void {
    this.batchService.getAllBatches().subscribe((data: any) => {
      this.batches = data;
    });
  }

  submitForm() {

    if (!this.intern.batchId) {
      alert("Select batch ❗");
      return;
    }

    const batchId = Number(this.intern.batchId);

    this.internService.addIntern(this.intern, batchId).subscribe({
      next: () => alert('Intern Added ✅'),
      error: (err) => {
        console.error(err);
        alert('Error ❌');
      }
    });
  }
}