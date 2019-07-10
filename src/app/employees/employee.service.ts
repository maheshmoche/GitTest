import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listemployees: Employee[] = [
        {
            id: 1,
            name: 'mark',
            gender: 'Male',
            email: 'mark.john@gmail.com',
            contactPreference: 'Email',
            phoneNumber: 4543289980,
            dateofBirth: new Date('05/22/2019'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'mary',
            gender: 'Female',
            email: 'mary.john@gmail.com',
            contactPreference: 'Email',
            phoneNumber: 5654676567,
            dateofBirth: new Date('05/22/2019'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'riya',
            gender: 'Female',
            email: 'riya.tom@gmail.com',
            contactPreference: 'Email',
            phoneNumber: 4543234560,
            dateofBirth: new Date('05/22/2019'),
            department: 'Help Desk',
            isActive: true,
            photoPath: 'assets/images/riya.png'
        },

    ];

    getEmployees(): Employee[] {
        return this.listemployees;



    }


}

