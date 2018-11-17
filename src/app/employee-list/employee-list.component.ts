import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import {Employee} from '../model/employee';


@Component({
  selector: 'app-employee-list',
  template: `
    <div class="list">
      <h2>{{label}}</h2>
      <app-employee-item *ngFor="let employee of employees"
                     [employee]="employee"
                     (select)="select.emit($event)">
      </app-employee-item>
    </div>`,
  styles: [`
    .list {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input() employees: Employee[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

}
