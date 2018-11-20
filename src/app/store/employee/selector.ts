import * as fromEmployees from "./reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Employee} from "../../model/employee";

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

export const getDayOfMonth = createSelector(
  getEmployees,
  (employees) => {
    let dayOfMonth = [];
    if (employees && (Object.keys(employees).length !== 0)) {
      const firstEmployeeKey: string = Object.keys(employees)[0]; // TODO
      const firstEmployee: Employee = employees[firstEmployeeKey]; // TODO
      dayOfMonth = Object.keys(firstEmployee.timetable);
    }
    return dayOfMonth
  }
);

