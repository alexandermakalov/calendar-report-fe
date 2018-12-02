import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-selected',
  template: `
    <div *ngFor="let item of employees">
      {{item}}
    </div>
  `,
  styles: []
})

export class EmployeeSelectedComponent implements OnInit {
  @Input() employees: number[];
  JSON;
  constructor() {
    this.JSON = JSON;
  }

  ngOnInit() {
  }

}
