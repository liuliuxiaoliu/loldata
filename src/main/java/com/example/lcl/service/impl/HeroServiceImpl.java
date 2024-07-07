package com.example.lcl.service.impl;

import com.example.lcl.entity.Hero;
import com.example.lcl.mapper.HeroMapper;
import com.example.lcl.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeroServiceImpl implements HeroService {
    @Autowired
    private HeroMapper heroMapper;
    @Override
    public List<Hero> getHeroList() {
        return heroMapper.getHeroList();
    }
}
