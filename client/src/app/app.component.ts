import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  jobApplicationForm: FormGroup = new FormGroup({
    date: new FormControl(new Date().toLocaleDateString()),
    companyName: new FormControl("", [Validators.required]),
    jobPosition: new FormControl("", [Validators.required])
  })

  onSubmit() {
    const formValue: FormGroup = this.jobApplicationForm.value;
    console.log(formValue)
  }
}
