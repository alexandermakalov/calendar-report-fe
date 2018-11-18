import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>('http://127.0.0.1:5000/api/employees')
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

}
