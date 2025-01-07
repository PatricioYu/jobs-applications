package com.applied.api.controller;

import com.applied.api.model.JobApplication;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {
    @GetMapping (path = "/")
    public String helloWorld() {
        return "hello world!";
    }

    @PostMapping (path = "/sent")
    public void postApplication(@RequestParam String companyName, @RequestParam String jobPosition) {
        System.out.println(companyName + jobPosition);
    }
}
