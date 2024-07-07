package com.example.lcl.mapper;

import com.example.lcl.entity.PersonTop;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PersonTopMapper {
    List<PersonTop> getPersonTopList();
}
