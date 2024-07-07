package com.example.lcl.controller;

import com.example.lcl.entity.PersonTop;
import com.example.lcl.service.PTopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/personTop")
public class PTopController {
    @Autowired
    private PTopService pTopService;

    @GetMapping("/getPersonTopList")
    public List<PersonTop> getPersonTopList() {
        return pTopService.getPersonTopList();
    }
}
