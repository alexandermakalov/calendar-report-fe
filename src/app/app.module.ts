import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSelectedComponent } from './employee-selected/film-selected.component';
import { reducers, metaReducers } from './store/employee/reducer';
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeItemComponent,
    EmployeeListComponent,
    EmployeeSelectedComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
