import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InternService } from '../../services/intern.service';

@Component({
  selector: 'app-intern-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intern-list.component.html'
})
export class InternListComponent implements OnInit {

  interns: any[] = [];

  searchText: string = '';
  selectedBatch: string = '';
  selectedType: string = '';

  constructor(private internService: InternService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  // ✅ LOAD ALL INTERNS
  loadAll() {
    this.internService.getAllInterns().subscribe((data: any) => {
      this.interns = data;
    });
  }

  // ✅ SEARCH BY NAME
  search() {
    if (!this.searchText) return;

    this.internService.searchByName(this.searchText)
      .subscribe((data: any) => {
        this.interns = data;
      });
  }

filterByBatch() {
  if (!this.selectedBatch) {
    this.loadAll();
    return;
  }

  this.internService.filterByBatch(Number(this.selectedBatch))
    .subscribe((data: any) => this.interns = data);
}

filterByType() {
  if (!this.selectedType) {
    this.loadAll();
    return;
  }

  this.internService.filterByType(this.selectedType)
    .subscribe((data: any) => this.interns = data);
}
}