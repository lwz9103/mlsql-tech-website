import React from "react";

const zh_CN = {
    blog: "博客",
    tutorial: "文档",
    community: "社区",
    downdloads: "下载",
    video: "视频",
    desc: "一门面向大数据和AI的语言",
    ease_of_use: "易于使用",
    ease_of_use_desc: `MLSQL非常易于使用，以SQL为基本语法单元，支持命令行形态，内嵌Python，可以直接分布式操作海量数据，玩转数据于弹指之间。`,
    data_security: "数据安全",
    data_security_desc: `MLSQL语言内置数据安全，可以让你精细控制粒度到列的数据访问，与此同时，你还可以控制每个成员允许使用的语法操作，并具有高度可扩展性`,
    open_source: "开源",
    open_source_desc: `MLSQL核心引擎基于Apache V2协议完全开源，用户可以自由使用。源代码托管于Github/Gitee.`,
    download: "下载",
    started: "开始试用",
    code_example: "语法示例",
    raw_code_example: `load libsvm.\`sample_libsvm_data.txt\` as data;

train data as RandomForest.\`/tmp/model\`;

register RandomForest.\`/tmp/model\` as rf_predict;

select rf_predict(features) from data as result;`,
    try_online_guide: "体验站点引导",
    try_online_guide_desc: "通过体验站点，你可以熟悉MLSQL语法，体验分析工坊等功能",
    join_wechat_group: "加入微信组",
    join_wechat_group_desc: "扫描下面二维码，添加助手，发送 mlsql 关键字加入群聊",
    aliyun_support: "云原生支持",
    aliyun_support_desc: "通过http://analysis.mlsql.tech/,你可以轻松使用MLSQL以及分析工坊分析您在阿里云上的数据。",
    aliyun_support_desc2: "用户可以轻易的将MLSQL引擎部署于支持K8s的各种云以及私有部署上。我们同时也支持Yarn等部署模式。",
    load_save_1: "加载,保存各类数据源",
    load_save_1_desc:"使用Load/Save语法可以加载市面上大部分数据源和数据格式",
    load_save_1_code: `load excel.\`/tmp/data.excel\` as table1;
load hive.\`db.table\` as table1;
...
load es.\`db.table\` as table1;
save overwrite table1 as hive.\`db.table2\`;
`,
    load_save_2: "海量数据处理",
    load_save_2_desc:"用户可以Select语句对load的数据进行分布式处理",
    load_save_2_code: `select * from table1 as newtable;

select split(col1) as col1 as newtable as output; 
`,
    load_save_3: "AI Python支持",
    load_save_3_desc:"可以使用Python完成对SQL处理的数据",
    load_save_4: "AI高阶支持",
    load_save_4_desc:"可以使用高阶模块快速完成算法训练,预测",
    load_save_4_code: `!pyInclude python_example.foreach.py named wow1;

load delta.\`public.consumer_complains\` as cc;

!ray on newcc py.wow1 named mlsql_temp_table2;
`,

}
export default zh_CN;