import {
  Component,
  OnInit,
  Input,
  Output,
  ContentChildren,
  QueryList,
  ViewChild
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

//importing template and style
import { TABLE_TEMPLATE } from './table.layout';
import { TABLE_STYLE } from './table.style';

//importing child components
import { DataGridRow } from './table.row.component';
import { DataGridColumn } from './table.column.component';

@Component({
  moduleId: module.id,
  selector: 'data-grid',
  template: TABLE_TEMPLATE,
  styles: [TABLE_STYLE]
})
export class DataGrid implements OnInit {
  //Input fields to get data from data grid
  @ContentChildren(DataGridColumn) dataGridColumns: QueryList<DataGridColumn>;
  @Input() collapse = false;
  @Input() _title: string;
  @Input() displayCount: number;
  @Input() count: string = '4px';
  @Input() columnCount: number;
  @Input() fixedFront: number;
  @Input() fixedBack: boolean;
  columnCountStart: number = 0;
  columnCountEnd: number;
  _items: any;
  @Input()
  get items() {
    return this._items;
  }

  set items(items: any[]) {
    this._items = items;
  }
  constructor() {}

  //navigating hide/show additional columns
  navigate(direction) {
    if (direction == 'left') {
      this.columnCountStart = this.columnCountStart - this.columnCount;
      this.columnCountEnd = this.columnCountEnd - this.columnCount;
    }
    if (direction == 'right') {
      this.columnCountStart = this.columnCountStart + this.columnCount;
      this.columnCountEnd = this.columnCountEnd + this.columnCount;
    }
  }
  ngOnInit() {
    this.columnCount = this.columnCount - 1;
    this.columnCountEnd = this.columnCount;
  }
}
