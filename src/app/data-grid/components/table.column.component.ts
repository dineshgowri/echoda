import { Directive, OnInit, Input, Output } from '@angular/core';

@Directive({
  selector: 'data-grid-column'
})
export class DataGridColumn implements OnInit {
  constructor() {}

  @Input() property: string;
  @Input() sortable: boolean;
  @Input() title: string;
  @Input() visible: boolean;

  ngOnInit() {
    //console.log('sdf', this.sortable);
    //console.log(this.title)
  }
}
