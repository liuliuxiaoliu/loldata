package com.example.lcl.service.impl;

import com.example.lcl.entity.Line;
import com.example.lcl.mapper.LineMapper;
import com.example.lcl.service.LineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LineServiceImpl implements LineService {
    @Autowired
    private LineMapper lineMapper;

    @Override
    public Map getLineData() {
        List<Line> lines = lineMapper.getLineList();
        List<String> nameData = new ArrayList<>();
        List<Integer> killsData = new ArrayList<>();
        List<Integer> assistsData = new ArrayList<>();
        List<Integer> deathsData = new ArrayList<>();
        for (Line line : lines) {
            String name = line.getName();
            nameData.add(name);
            Integer kills = line.getKills();
            killsData.add(kills);
            Integer assists = line.getAssists();
            assistsData.add(assists);
            Integer deaths = line.getDeaths();
            deathsData.add(deaths);
        }
        Map map = new HashMap();
        map.put("nameData", nameData);
        map.put("killsData", killsData);
        map.put("assistsData", assistsData);
        map.put("deathsData", deathsData);
        return map;
    }
}
