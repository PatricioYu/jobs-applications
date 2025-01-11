package com.applied.api.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class JobApplication {
    private String date;
    private String companyName;
    private String jobPosition;
}
