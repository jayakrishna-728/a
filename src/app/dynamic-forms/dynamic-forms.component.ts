import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent {
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      fields: this.fb.array([]), // Initialize an empty FormArray
    });
  }

  get fields() {
    return this.dynamicForm.get('fields') as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      value: ['', Validators.required], // Add a required control
    });
    console.log(this.fields);
    console.log(this.dynamicForm)
    this.fields.push(fieldGroup);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted:', this.dynamicForm.value);
    }
  }


}
