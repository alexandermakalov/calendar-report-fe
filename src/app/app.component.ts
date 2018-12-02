import {Component} from '@angular/core';
import {Employee} from './model/employee';
import {Store} from '@ngrx/store';
import * as fromRoot from './store/employee/reducer';
import * as employeeAction from './store/employee/actions';
import * as employeeSelector from './store/employee/selector';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <app-employee-list
        [employees]="employees$ | async"
        [dayOfMonth]="dayOfMonth$ | async"
        [label]="'Employee list'"
        (select)="onSelect($event)">
      </app-employee-list>
      <app-employee-selected [employees]="selected$ | async">
      </app-employee-selected>
    </main>
  `,
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees$: Observable<Employee[]>;
  selected$: Observable<number[]>;
  dayOfMonth$: Observable<string[]>;

  constructor(private store: Store<fromRoot.EmployeeState>) {
    this.employees$ = store.select(employeeSelector.getAllEmployees);
    this.selected$ = store.select(employeeSelector.getSelectedEmployees);
    this.dayOfMonth$ = store.select(employeeSelector.getDayOfMonth);
    this.store.dispatch(new employeeAction.LoadEmployees());
  }

  onSelect({ id, checked }): void {
    if (checked) {
      this.store.dispatch(new employeeAction.Select(id));
    } else {
      this.store.dispatch(new employeeAction.Deselect(id))
    }
  }
}
