package com.example.lcl.service.impl;

import com.example.lcl.entity.Line;
import com.example.lcl.mapper.LineMapper;
import com.example.lcl.service.PersonFilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PersonFilterServiceImpl implements PersonFilterService {
    @Autowired
    private LineMapper lineMapper;
    @Override
    public Map getPersonFilter() {
        List<Line> personList = lineMapper.getLineList();
        Double kda = 0.0;
        Line kdaPerson = new Line();//KDA = (Kill + Assist) ÷ Death,死亡数为0时，Death默认为1
        Line deathPerson = new Line();
        deathPerson.setDeaths(0);
        Line killPerson = new Line();
        killPerson.setKills(0);
        for (Line person : personList) {
            Integer kills = person.getKills();
            Integer deaths = person.getDeaths();
            Integer assists = person.getAssists();
            if (deaths == 0){
                deaths=1;
            }
            if((kills+assists)*1.0/deaths > kda){
                kdaPerson = person;
            }
            if (deaths > deathPerson.getDeaths()) {
                deathPerson = person;
            }
            if (kills > killPerson.getKills()) {
                killPerson = person;
            }
        }

        HashMap map = new HashMap();
        map.put("kdaPerson", kdaPerson);
        map.put("deathPerson", deathPerson);
        map.put("killPerson", killPerson);
        return map;
    }
}
