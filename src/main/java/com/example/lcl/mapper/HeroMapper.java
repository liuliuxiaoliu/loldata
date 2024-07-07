package com.example.lcl.mapper;

import com.example.lcl.entity.Hero;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface HeroMapper {
    List<Hero> getHeroList();
}
