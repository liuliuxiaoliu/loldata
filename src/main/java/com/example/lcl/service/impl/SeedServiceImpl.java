package com.example.lcl.service.impl;

import com.example.lcl.entity.Pie;
import com.example.lcl.entity.Seed;
import com.example.lcl.mapper.SeedMapper;
import com.example.lcl.service.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SeedServiceImpl implements SeedService {
    @Autowired
    private SeedMapper seedMapper;
    @Override
    public Map getSeedList() {
        List<Seed> seedList = seedMapper.getSeedList();
        List<String> tagData = new ArrayList<>();
        List<Pie> pieList = new ArrayList<>();
        for (Seed seed : seedList) {
            String tag = seed.getTeam()+"\n"+seed.getName();
            tagData.add(tag);
            Pie pie = new Pie();
            pie.setName(tag);
            Integer value = seed.getValue();
            pie.setValue(value);
            pieList.add(pie);
        }
        Map map = new HashMap();
        map.put("tagData", tagData);
        map.put("pieList", pieList);
         return map;
    }
}
