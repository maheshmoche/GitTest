import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDispaly: Employee;
  private arrayIndex = 1;
  searchTerm: string;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDispaly = this.employees[0];
  }
  nextEmployee(): void{
    alert("hello")
  if (this.arrayIndex <= 2) {
    this.employeeToDispaly = this.employees[this.arrayIndex];
    this.arrayIndex++;

  } else {
    this.employeeToDispaly = this.employees[0];
    this.arrayIndex = 1;
  }
}

}


