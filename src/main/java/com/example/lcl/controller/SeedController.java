package com.example.lcl.controller;

import com.example.lcl.entity.Seed;
import com.example.lcl.service.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/seed")
public class SeedController {
    @Autowired
    private SeedService seedService;

    @GetMapping("/getSeedList")
    public Map getSeedList() {
        return seedService.getSeedList();
    }
}
