package com.example.lcl.controller;

import com.example.lcl.service.PersonFilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/personFilter")
public class PersonFilterController {
    @Autowired
    private PersonFilterService personFilterService;

    @GetMapping("/getPersonFilter")
    public Map getPersonFilter() {
        return personFilterService.getPersonFilter();
    }
}
