import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as employeeAction from './actions';
import {Employee} from '../../model/employee';

export interface EmployeeState {
  ids: number[];
  employees: { [id: number]: Employee };
  selected: number;
}

export const InitialEmployeeState: EmployeeState = {
  ids: [],
  employees: {},
  selected: null,
};

export function employeesReducer(state = InitialEmployeeState,
                                 action: employeeAction.Action) {
  switch (action.type) {
    case employeeAction.ADD_ONE: {
      const newEmployee: Employee = action.payload;
      return {
        ...state,
        ids: [...state.ids, newEmployee.id],
        employees: {...state.employees, newEmployee}
      };
    }
    case employeeAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }
    case employeeAction.LOAD_EMPLOYEES_SUCCESS: {
      const newEmployees: Employee[] = action.payload;
      const employees = {};
      const ids = [];
      newEmployees.forEach(employee => {
        ids.push(employee.id);
        employees[employee.id] = employee;
      });
      return {
        ...state,
        ids,
        employees
      };
    }
    default:
      return state;
  }
}

// TODO refactor
export interface State {
  employees: EmployeeState;
}

export const getIds = (state: EmployeeState) => state.ids;
export const getEmployees = (state: EmployeeState) => state.employees;
export const getSelected = (state: EmployeeState) => state.selected;

export const reducers: ActionReducerMap<State> = {
  employees: employeesReducer
};

export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

