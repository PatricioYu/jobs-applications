import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobApplicationService } from './services/job-application.service';
import { JobApplication } from './interfaces/job-application';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private service: JobApplicationService) {}

  jobApplicationForm: FormGroup = new FormGroup({
    date: new FormControl(new Date().toLocaleDateString()),
    companyName: new FormControl("", [Validators.required]),
    jobPosition: new FormControl("", [Validators.required])
  })

  onSubmit() {
    const formValue: JobApplication = this.jobApplicationForm.value;

    this.service.postJobApplication(formValue).subscribe({
      next: (res) => {
        console.log('Application submitted successfully!', res);
      },
      error: (err) => {
        console.error('Error submitting application:', err);
      }
    })
  }
}
