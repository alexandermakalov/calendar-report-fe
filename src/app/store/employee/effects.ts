import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from './reducer';
import * as employeActions from './actions';
import * as fromServices from '../../services/employee.service';
import {of} from "rxjs";

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: fromServices.EmployeeService
  ) {}

  @Effect()
  loadMovies$ = this.actions$.ofType(employeActions.LOAD_EMPLOYEES).pipe(
    switchMap(() => {
      return this.employeeService
        .getEmployees()
        .pipe(
          map(employees => new employeActions.LoadEmployeesSuccess(employees)),
          catchError(error => of(new employeActions.LoadEmployeesFail(error)))
        );
    })
  );

}
