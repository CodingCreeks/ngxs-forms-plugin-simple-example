import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { FormState } from '../app.state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Select(FormState) form$: Observable<any>;
  form: FormGroup;
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'firstName': [''],
      'lastName': [''],
      'role': [''],
      'notes': ['']
    });
  }
}