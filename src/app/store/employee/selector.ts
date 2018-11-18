import * as fromEmployees from "./reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const getEmployeeState =
  createFeatureSelector<fromEmployees.EmployeeState>('employees');

export const getIds = createSelector(
  getEmployeeState,
  fromEmployees.getIds,
);

export const getEmployees = createSelector(
  getEmployeeState,
  fromEmployees.getEmployees,
);

export const getSelected = createSelector(
  getEmployeeState,
  fromEmployees.getSelected,
);

export const getSelectedEmployee = createSelector(
  getSelected,
  getEmployees,
  (selectedId, films) => {
    return {
      ...films[selectedId]
    };
  }
);

export const getAllEmployees = createSelector(
  getIds,
  getEmployees,
  (ids, employees) => {
    return ids.map(id => employees[id]);
  }
);
