import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { FormState } from '../app.state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
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