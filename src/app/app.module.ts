import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form.component';
import { DataTableModule } from './data-tables/index';

import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';
import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';

//Importing Data Grid component
import { DataGridModule } from './data-grid';

//Importing Services
import { MockService } from './services/services';

//Pipe
import { SearchPipe } from './pipes/searchPipe/searchPipe';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    HttpClientModule,
    DataGridModule
  ],
  declarations: [
    AppComponent,
    DataTableDemo1,
    DataTableDemo2,
    DataTableDemo3,
    DataTableDemo1Remote,
    SearchPipe,
    FormComponent
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
