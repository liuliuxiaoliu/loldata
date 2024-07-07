package com.example.lcl.mapper;

import com.example.lcl.entity.Line;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface LineMapper {
    List<Line> getLineList();
}
