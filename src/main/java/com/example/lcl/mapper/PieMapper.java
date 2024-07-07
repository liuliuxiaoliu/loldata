package com.example.lcl.mapper;

import com.example.lcl.entity.Pie;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface PieMapper {
        List<Pie> getPieList();
    }
