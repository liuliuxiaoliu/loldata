package com.example.lcl.service.impl;

import com.example.lcl.entity.PersonTop;
import com.example.lcl.mapper.PersonTopMapper;
import com.example.lcl.service.PTopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PTopServiceImpl implements PTopService {
    @Autowired
    private PersonTopMapper personTopMapper;
    @Override
    public List<PersonTop> getPersonTopList() {
        return personTopMapper.getPersonTopList();
    }
}
