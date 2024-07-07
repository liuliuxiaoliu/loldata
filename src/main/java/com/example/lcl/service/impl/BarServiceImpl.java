package com.example.lcl.service.impl;

import com.example.lcl.entity.Team;
import com.example.lcl.mapper.TeamMapper;
import com.example.lcl.service.BarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BarServiceImpl implements BarService {

    @Autowired
    private TeamMapper teamMapper;

    @Override
    public Map getTeamBarData() {
        // 从数据库中查询出战队所有数据
        List<Team> teamList = teamMapper.getTeamList();
        // 每个战队名称的数据集合
        List<String> xAxisData = new ArrayList<>();
        // 每个战队胜的数据集合
        List<Integer> winData = new ArrayList<>();
        // 每个战队负的数据集合
        List<Integer> defeatedData = new ArrayList<>();
        // 每个战队胜率的集合
        List<Integer> lineData = new ArrayList<>();
        // 循环战队集合数据
        for (Team team : teamList) {
            // 获取战队名称
            String teamName = team.getTeam();
            // 设置战队名称到集合
            xAxisData.add(teamName);
            // 获取战队胜的次数
            Integer win = team.getWin();
            // 设置战队胜的次数到集合
            winData.add(win);
            // 获取战队负的次数
            Integer defeated = team.getDefeated();
            // 设置战队负的次数到集合
            defeatedData.add(defeated);
            // 总数=胜+负
            Integer total = win + defeated;
            // 胜率百分比=胜*(胜+负)*100
            Double line = win * 1.0 / total * 1.0 * 100;
            // 取整数
            Integer num = line.intValue();
            // 添加到折线图集合
            lineData.add(num);
        }
        // 返回给前端的数据结构map
        Map map = new HashMap();
        // 战队名称数据
        map.put("xAxisData", xAxisData);
        // 战队胜的次数
        map.put("winData", winData);
        // 战队负的次数
        map.put("defeatedData", defeatedData);
        // 战队胜率
        map.put("lineData", lineData);
        // 返回map
        return map;
    }

}
