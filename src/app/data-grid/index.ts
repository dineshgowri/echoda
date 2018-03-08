import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataGrid } from './components/table.component';
import { DataGridRow } from './components/table.row.component';
import { DataGridColumn } from './components/table.column.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DataGrid, DataGridRow, DataGridColumn],
  exports: [DataGrid, DataGridRow, DataGridColumn]
})
export class DataGridModule {}
