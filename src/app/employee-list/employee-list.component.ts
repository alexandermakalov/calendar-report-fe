import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import {Employee} from '../model/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss', '../employee-item/employee-item.component.scss'],
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input() employees: Employee[];
  @Input() dayOfMonth: string[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

}
