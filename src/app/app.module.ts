import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import { AppComponent } from './app.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSelectedComponent } from './employee-selected/employees-selected.component';
import { reducers, metaReducers } from './store/employee/reducer';
import {StoreModule} from "@ngrx/store";
import { EmployeeEffects } from './store/employee/effects';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeItemComponent,
    EmployeeListComponent,
    EmployeeSelectedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([EmployeeEffects]),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
