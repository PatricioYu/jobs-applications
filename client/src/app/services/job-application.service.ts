import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobApplication } from '../interfaces/job-application';
// import { Observable } from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private BASE_URL: string = "http://localhost:8080/sent";

  constructor(private http: HttpClient) {}

  // headers = new HttpHeaders()
  //   .set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*');

  postJobApplication(data: JobApplication){
    return this.http.post(this.BASE_URL, data);
  }
}
