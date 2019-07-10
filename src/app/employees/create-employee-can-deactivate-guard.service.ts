import { CanDeactivate } from '@angular/router';
import { CreateemployeeComponent } from './createemployee.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateemployeeComponent> {
    canDeactivate(component: CreateemployeeComponent): boolean {
        if(component.createEmployeeForm.dirty) {
             return confirm('Are you Sure You Want Discard your Changes?');
        }
        return true;
    }
}