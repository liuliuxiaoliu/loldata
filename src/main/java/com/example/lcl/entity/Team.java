package com.example.lcl.entity;

import lombok.Data;

@Data
public class Team {
    private Integer id;
    private String team;
    private Integer win;
    private Integer defeated;
    private Integer kills;
    private Integer deaths;
    private Integer insert;
    private Integer drainage;
}
