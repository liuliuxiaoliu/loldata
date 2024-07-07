$(window).load(function() {
    $(".loading").fadeOut()
})

$(function() {
    $.ajax({
        type: "get",
        url: "http://localhost:8080/pie/getPieList",
        success: function (msg) {
            console.log(msg);
            echarts_1(msg)
        }
    });

    $.ajax({
        type: "get",
        url: "http://localhost:8080/seed/getSeedList",
        success: function (msg) {
            console.log(msg);
            echarts_2(msg)
        }
    });
    $.ajax({
        type: "get",
        url: "http://localhost:8080/line/getLineData",
        success: function (msg) {
            console.log(msg);
            // 调用设置折线图数据方法
            echarts_3(msg)
        }
    });
    $.ajax({
        type: "get",
        url: "http://localhost:8080/team/getTeamBarData",
        success: function (msg) {
            console.log(msg);
            // 调用设置柱状图数据方法
            echarts_4(msg)
        }
    });
    $.ajax({
        type: "get",
        url: "http://localhost:8080/line/getLineData",
        success: function (msg) {
            console.log(msg);
            echarts_5(msg)
        }
    });
    $.ajax({
        type: "get",
        url: "http://localhost:8080/teamFilter/getTeamFilter",
        success: function (msg) {
            console.log(msg);
            let victoryTeam = msg.victoryTeam
            let killTeam = msg.killTeam
            let insertTeam = msg.insertTeam
            zb1(victoryTeam)
            zb2(killTeam)
            zb3(insertTeam)
        }
    });


    $.ajax({
        type: "get",
        url: "http://localhost:8080/personFilter/getPersonFilter",
        success: function (msg) {
            console.log(msg);
            let kdaPerson = msg.kdaPerson
            let deathPerson = msg.deathPerson
            let killPerson = msg.killPerson
            zb4(killPerson)
            zb5(deathPerson)
            zb6(kdaPerson)

        }
    });


    function echarts_1(msg) {
        let teamData = msg.teamData;
        let pieList = msg.pieList;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 30,
                height: 160,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
                data: teamData
            },
            calculable: true,
            series: [{
                name: ' ',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                type: 'pie',
                radius: [30, 70],
                center: ['35%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                data: pieList
            }, ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_2(msg) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        let tagData = msg.tagData;
        let pieList = msg.pieList;
        let halfSet = [{
            value: 0,
            name: "",
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
            {
                value: 0,
                name: "",
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }];
        let seedList = pieList.concat(halfSet);
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                top: '15%',
                data: tagData,
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },
            calculable: true,
            series: [{
                name: '',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [51, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '45%'],

                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        //  formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: seedList

            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_3(msg) {
        let nameData = msg.nameData;
        let killsData = msg.killsData;
        let assistsData = msg.assistsData;
        let deathsData = msg.deathsData;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {

                //icon: 'vertical',
                data: ['总击杀', '总助攻', '总死亡'],
                //align: 'center',
                // right: '35%',
                top: '0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: nameData
            }, {




            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '总击杀',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: killsData
            }, {
                name: '总助攻',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: assistsData
            }, {
                name: '总死亡',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#67E0E3',
                        borderColor: 'rgba(10,148,236,0.5)',
                        borderWidth: 12
                    }
                },
                data: deathsData
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_4(msg) {
        // 每个战队胜的次数
        let winData = msg.winData;
        // 每个战队负的次数
        let defeatedData = msg.defeatedData;
        // 战队名称
        let xAxisData = msg.xAxisData;
        // 胜率
        let lineData = msg.lineData;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            "legend": {

                "data": [{
                        "name": "Victory"
                    },
                    {
                        "name": "Defeat"
                    },
                    {
                        "name": "胜率"
                    }
                ],
                "top": "0%",
                "textStyle": {
                    "color": "rgba(255,255,255,1)", //图例文字
                    "fontSize": "16"
                }
            },

            "xAxis": [{
                "type": "category",

                data: xAxisData,
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgb(255,255,255)",
                        fontSize: '16',
                    },
                },

            }, ],
            "yAxis": [{
                    "type": "value",
                    "name": "次数",
                    "min": 0,
                    "interval": 10,
                    "axisLabel": {
                        "show": true,

                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,1)'
                        }
                    }, //左线色
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,0.5)"
                        }
                    }, //x轴线
                },
                {
                    "type": "value",
                    "name": "胜率",
                    "show": true,
                    "axisLabel": {
                        "show": true,

                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,1 )'
                        }
                    }, //右线色
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)"
                        }
                    }, //x轴线
                },
            ],
            "grid": {
                "top": "10%",
                "right": "30",
                "bottom": "30",
                "left": "30",
            },
            "series": [{
                    "name": "Victory",

                    "type": "bar",
                    "data": winData,
                    "barWidth": "auto",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "#67E0E3"
                                    },

                                    {
                                        "offset": 1,
                                        "color": "#67E0E3"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    }
                },
                {
                    "name": "Defeat",
                    "type": "bar",
                    "data": defeatedData,
                    "barWidth": "auto",

                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "#FFDB5C"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#FFDB5C"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    },
                    "barGap": "0"
                },
                {
                    "name": "胜率",
                    "type": "line",
                    "yAxisIndex": 1,

                    "data": lineData,
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#48f593",

                        }
                    },
                    "smooth": true
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_5(msg) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        let nameData = msg.nameData;
        let killsData = msg.killsData;
        let assistsData = msg.assistsData;
        let deathsData = msg.deathsData;
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: [ '总击杀', '总助攻', '总死亡', ],
                textStyle: {
                    color: 'skyblue'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }, //左线色
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }, //左线色
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }, //x轴线
                //data: ['WeJiumeng', 'LGDxiye', 'TESknight', 'JDGKanavi', 'JackeyLove', 'SNSofM', 'V5Mole', 'EDGScout', 'SNhuanfeng', 'FPXDoinb']
                data: nameData
            },
            series: [
                {
                    name: '总击杀',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        color: '#67E0E3'
                    },
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    //data: [205, 191, 239, 169, 205, 125, 162, 136, 189, 157]
                    data: killsData
                },
                {
                    name: '总助攻',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        color: '#FFDB5C'
                    },
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    //data: [266, 289, 299, 345, 278, 375, 270, 286, 315, 304]
                    data:assistsData
                },
                {
                    name: '总死亡',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        color: '#FF9F7F'
                    },
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    //data: [119, 124, 76, 122, 117, 136, 115, 73, 102, 115]
                    data:deathsData
                },

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb1(victoryTeam) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        let team = victoryTeam.team
        let win = victoryTeam.win
        let defeated = victoryTeam.defeated
        document.getElementById("victoryTop").innerHTML = team+"<br>胜率最高";
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#37A2DA',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: win,
                    name: '胜利',
                    label: {
                        normal: {
                            formatter: win + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: defeated,
                    name: '战败',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '胜率' + Math.round(win / (win+defeated) * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb2(killTeam) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        let team = killTeam.team
        let kills = killTeam.kills
        let deaths = killTeam.deaths
        document.getElementById("killTop").innerHTML = team+"<br>击杀最高";
        option = {

            tooltip: {
                trigger: 'item',
            },
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#32C5E9',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: kills,
                    name: '总击杀',
                    label: {
                        normal: {
                            formatter: kills + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: deaths,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb3(insertTeam) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        let team = insertTeam.team
        let insert = insertTeam.insert
        let drainage = insertTeam.drainage
        document.getElementById("insertTop").innerHTML = team+"<br>插眼最多";
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#67E0E3',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: insert,
                    name: '插眼',
                    label: {
                        normal: {
                            formatter: insert + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: drainage,
                    name: '排眼',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总插眼'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb4(killPerson) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        let kills = killPerson.kills
        let name = killPerson.name
        let deaths = killPerson.deaths
        document.getElementById("pkillTop").innerHTML = name+"<br>击杀最多";
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#9FE6B8',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: kills,
                    name: '击杀',
                    label: {
                        normal: {
                            formatter: kills + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: deaths,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb5(deathPerson) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb5'));
        let kills = deathPerson.kills
        let assists = deathPerson.assists
        let name = deathPerson.name
        let deaths = deathPerson.deaths
        document.getElementById("pdeathTop").innerHTML = name+"<br>死亡最多";
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FFDB5C',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: deaths,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: deaths + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: kills+assists,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总死亡'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb6(kdaPerson) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb6'));
        let kills = kdaPerson.kills
        let assists = kdaPerson.assists
        let name = kdaPerson.name
        let deaths = kdaPerson.deaths
        document.getElementById("kdaTop").innerHTML = name+"<br>KDA最高";
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FB7293',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: kills+assists,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: kills+assists + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: deaths,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return 'KDA：' + Math.round((kills + assists) / deaths)
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
})