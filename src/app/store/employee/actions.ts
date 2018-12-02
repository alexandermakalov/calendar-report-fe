import {Action} from '@ngrx/store';
import {Employee} from '../../model/employee';

export const SELECT = '[Employee] Select';
export const DESELECT = '[Employee] Deselect';
export const ADD_ONE = '[Employee] Add One';
export const LOAD_EMPLOYEES = '[Employee] Load Employees';
export const LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success';
export const LOAD_EMPLOYEES_FAIL = '[Employee] Load Employees Fail';

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {
  }
}

export class Deselect implements Action {
  readonly type = DESELECT;

  constructor(public payload: number) {
  }
}

export class AddOne implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: Employee) {
  }
}

export class LoadEmployees implements Action {
  readonly type = LOAD_EMPLOYEES;
}

export class LoadEmployeesSuccess implements Action {
  readonly type = LOAD_EMPLOYEES_SUCCESS;

  constructor(public payload: Employee[]) {
  }
}

export class LoadEmployeesFail implements Action {
  readonly type = LOAD_EMPLOYEES_FAIL;

  constructor(public payload: any) {
  }
}

export type Action = AddOne | Select | LoadEmployees | LoadEmployeesSuccess | LoadEmployeesFail | Deselect;
