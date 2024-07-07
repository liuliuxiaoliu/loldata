package com.example.lcl.controller;

import com.example.lcl.entity.TeamTop;
import com.example.lcl.service.TopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/teamTop")
public class TopController {
    @Autowired
    private TopService topService;

    @GetMapping("/getTeamTopList")
    public List<TeamTop> getTeamTopList(){
        return topService.getTeamTopList();
    }
}
