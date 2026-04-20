import { Routes } from '@angular/router';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { InternListComponent } from './components/intern-list/intern-list.component';
import { BatchFormComponent } from './components/batch-form/batch-form.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';

export const routes: Routes = [
  { path: 'add-intern', component: InternFormComponent },
  { path: 'interns', component: InternListComponent },
  { path: 'add-batch', component: BatchFormComponent },
  { path: 'batches', component: BatchListComponent },
  { path: '', redirectTo: 'interns', pathMatch: 'full' }
];