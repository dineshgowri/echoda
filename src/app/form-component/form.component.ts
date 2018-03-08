import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() label: string;
  @Input() input: string;
  @Input() required: boolean;
  @Input() modelName: string;
  @Input() validation: string;
  @Input() value: string;
  @Input() view: string;
  constructor() {}
  ngOnInit() {}
}
