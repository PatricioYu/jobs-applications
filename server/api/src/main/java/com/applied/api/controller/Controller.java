package com.applied.api.controller;

import com.applied.api.model.JobApplication;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {
    @GetMapping (path = "/")
    public String helloWorld() {
        return "hello world!";
    }

    @CrossOrigin
    @PostMapping (path = "/sent")
    public void postApplication(@RequestBody JobApplication jobApplication) {
        System.out.println("Company Name: " + jobApplication.getCompanyName());
        System.out.println("Job Position: " + jobApplication.getJobPosition());
        System.out.println("Date: " + jobApplication.getDate());
    }
}
