package com.example.lcl.mapper;

import com.example.lcl.entity.Team;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TeamMapper {
    List<Team> getTeamList();
}
