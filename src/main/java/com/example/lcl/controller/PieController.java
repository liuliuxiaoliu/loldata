package com.example.lcl.controller;


import com.example.lcl.entity.Pie;
import com.example.lcl.service.PieService;
import com.example.lcl.service.impl.PieServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/pie")
public class PieController {
    @Autowired
    private PieService pieService;

    @GetMapping("/getPieList")
    public Map getPieList(){
        return pieService.getPieList();
    }
}
