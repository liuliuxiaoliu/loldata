package com.example.lcl.controller;

import com.example.lcl.service.BarService;
import com.example.lcl.service.LineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/line")
public class LineController {
    @Autowired
    private LineService lineService;

    @GetMapping("/getLineData")
    public Map getLineData() {
        return lineService.getLineData();
    }
}
