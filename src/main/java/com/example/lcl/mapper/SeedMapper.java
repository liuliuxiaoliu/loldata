package com.example.lcl.mapper;

import com.example.lcl.entity.Seed;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeedMapper {
    List<Seed> getSeedList();
}
