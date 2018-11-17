import {Component} from '@angular/core';
import {Employee} from './model/employee';
import {Store} from '@ngrx/store';
import * as fromRoot from './store/employee/reducer';
import * as employeeAction from './store/employee/actions';
import * as employeeSelector from './store/employee/selector';
import {Observable} from "rxjs";
import {EmployeeState} from "./store/employee/reducer";

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <app-employee-list
        [employees]="employees$ | async"
        [label]="'Employee list'"
        (select)="onSelect($event)">
      </app-employee-list>
      <app-employee-selected [employee]="selected$ | async">
      </app-employee-selected>
    </main>
  `,
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees$: Observable<Employee[]>;
  selected$: Observable<any>;

  constructor(private store: Store<fromRoot.EmployeeState>) {
    this.employees$ = store.select(employeeSelector.getAllEmployees);
    this.selected$ = store.select(employeeSelector.getSelectedEmployee);
  }

  onSelect(id: number) {
    this.store.dispatch(new employeeAction.Select(id));
  }
}
