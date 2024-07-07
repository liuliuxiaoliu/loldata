package com.example.lcl.mapper;

import com.example.lcl.entity.TeamTop;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TeamTopMapper {
    List<TeamTop> getTeamTopList();
}
