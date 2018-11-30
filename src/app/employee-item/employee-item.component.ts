import {Employee, TimeTable} from '../model/employee';
import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import _ from "lodash";

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getWorkingHours(employeeTimeTable: TimeTable): number {
    let totalWorkingHours = 0;
    _.forEach(employeeTimeTable, (key) => {
      if (_.isNumber(key)) {
        totalWorkingHours += key;
      }
    });
    return totalWorkingHours;
  }
}
