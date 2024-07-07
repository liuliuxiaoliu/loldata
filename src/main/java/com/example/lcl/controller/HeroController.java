package com.example.lcl.controller;

import com.example.lcl.entity.Hero;
import com.example.lcl.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/hero")
public class HeroController {
    @Autowired
    private HeroService heroService;
    @GetMapping("/getHeroList")
    public List<Hero> getHeroList() {
        return heroService.getHeroList();
    }
}
