import {Employee} from '../model/employee';
import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-employee-item',
  template: `
    <li (click)="select.emit(employee.id)">{{employee.name}}</li>`,
  styles: []
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
