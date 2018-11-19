import {Employee} from '../model/employee';
import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

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
}
