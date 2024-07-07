package com.example.lcl.controller;

import com.example.lcl.service.BarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/team")
public class BarController {
    @Autowired
    private BarService barService;

    @GetMapping("/getTeamBarData")
    public Map getTeamBarData() {
        return barService.getTeamBarData();
    }


}
