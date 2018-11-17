import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-selected',
  template: `
    <div *ngIf="employee && employee.name">
      <h1>{{employee.name}}</h1>
    </div>
  `,
  styles: []
})

export class EmployeeSelectedComponent implements OnInit {
  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
