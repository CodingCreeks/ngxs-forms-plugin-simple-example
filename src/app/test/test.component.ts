import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { FormState } from '../app.state';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Select(FormState) form$: Observable<any>;

  form = this.fb.group({
      name: ['' ],
      email: ['']
   });

  constructor(private fb: FormBuilder) { }

}