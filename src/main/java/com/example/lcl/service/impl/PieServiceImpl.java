package com.example.lcl.service.impl;

import com.example.lcl.entity.Pie;
import com.example.lcl.mapper.PieMapper;
import com.example.lcl.service.PieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PieServiceImpl implements PieService {
    @Autowired
    private PieMapper pieMapper;

    @Override
    public Map getPieList() {
        Map map = new HashMap();
        List<Pie> pieList = pieMapper.getPieList();
        // 每个战队名称的数据集合
        List<String> teamData = new ArrayList<>();
        for (Pie p : pieList) {
            teamData.add(p.getName());
        }
        map.put("teamData", teamData);
        map.put("pieList", pieList);
        return map;
    }
}
