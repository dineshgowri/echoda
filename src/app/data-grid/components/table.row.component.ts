import {
  Component,
  Input,
  Inject,
  forwardRef,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { DataGrid } from './table.component';
import { TABLE_ROW_TEMPLATE } from './table.row.template';
import { TABLE_ROW_STYLE } from './table.row.style';

@Component({
  moduleId: module.id,
  selector: '[dataGridRow]',
  template: TABLE_ROW_TEMPLATE,
  styles: [TABLE_ROW_STYLE]
})
export class DataGridRow {
  @Input() item: any;
  @Input() columns: any;
  @Input() index: number;
  @Input() collapse: boolean;
  @Input() visible: boolean;
  @Input() columnCount: number;
  @Input() columnCountStart: number;
  @Input() columnCountEnd: number;
  ngOnInit() {
    //console.log('asdf', this.columnCount);
  }
}
