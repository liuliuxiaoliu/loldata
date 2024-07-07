package com.example.lcl.service.impl;

import com.example.lcl.entity.Team;
import com.example.lcl.mapper.TeamMapper;
import com.example.lcl.service.TeamFilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TeamFilterServiceImpl implements TeamFilterService {
    @Autowired
    private TeamMapper teamMapper;

    @Override
    public Map getTeamFilter() {
        List<Team> teamList = teamMapper.getTeamList();
        Team victoryTeam = new Team();//胜率最高
        victoryTeam.setWin(0);
        Team killTeam = new Team();//击杀最高
        killTeam.setKills(0);
        Team insertTeam = new Team();//插眼最高
        insertTeam.setInsert(0);
        //找最高
        for (Team team : teamList) {
            if (team.getWin() > victoryTeam.getWin()) {
                victoryTeam = team;
            }
            if (team.getKills() > killTeam.getKills()) {
                killTeam = team;
            }
            if (team.getInsert() > insertTeam.getInsert()) {
                insertTeam = team;
            }
        }
        Map map = new HashMap();
        map.put("victoryTeam", victoryTeam);
        map.put("killTeam", killTeam);
        map.put("insertTeam", insertTeam);
        return map;
    }
}
