package com.example.lcl.service.impl;

import com.example.lcl.entity.TeamTop;
import com.example.lcl.mapper.TeamTopMapper;
import com.example.lcl.service.TopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TopServiceImpl implements TopService {
    @Autowired
    private TeamTopMapper teamTopMapper;

    @Override
    public List<TeamTop> getTeamTopList() {
         return teamTopMapper.getTeamTopList();
//        List<String> nameData = new ArrayList<>();
//        List<Integer> numData = new ArrayList<>();
//        List<Integer> rateData = new ArrayList<>();
//        for (TeamTop teamTop : teamTopList) {
//            String name = teamTop.getName();
//            nameData.add(name);
//            Integer num = teamTop.getNum();
//            numData.add(num);
//            Integer rate = teamTop.getRate();
//            rateData.add(rate);
//        }
//        Map map = new HashMap();
//        map.put("name", nameData);
//        map.put("num", numData);
//        map.put("rate", rateData);
    }
}
