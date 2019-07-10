import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { markDirty } from '@angular/core/src/render3';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
   previewPhoto = false;
   employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateofBirth: null,
    department: null,
    isActive: null,
    photoPath: null
   };
   departments: Department[] = [
      { id: 1, name: 'Help Desk' },
      { id: 2, name: 'IT' },
      { id: 3, name: 'HR' },
      { id: 4, name: 'Testing' }
   ]; 
  constructor() { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }

  saveEmployee(newemployee: Employee): void {
    console.log(newemployee);
  }
   
}
