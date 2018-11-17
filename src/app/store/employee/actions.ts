import { Action } from '@ngrx/store';
import { Employee } from '../../model/employee';
export const SELECT = '[Employee] Select';
export const ADD_ONE = '[Employee] Add One';
export class Select implements Action {
  readonly type = SELECT;
  constructor(public payload: number) { }
}
export class AddOne implements Action {
  readonly type = ADD_ONE;
  constructor(public payload: Employee) { }
}
export type Action = AddOne | Select;
