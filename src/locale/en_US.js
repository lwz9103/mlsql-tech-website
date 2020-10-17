import React from "react";

const en_US = {
    blog: "Blog",
    tutorial: "Tutorial",
    community: "Community",
    downdloads: "Downdloads",
    video: "Video",
    desc: "The Programming Language Designed For Big Data and AI",
    ease_of_use: "Ease Of Use",
    ease_of_use_desc: ` MLSQL combines SQL and Python which make it more easy to use in BigData and AI.
                            If you knows Command Line, you knows MLSQL.
                            If you knows SQL, you knows MLSQL.
                            If you knows Python, you knows MLSQL.`,
    open_source: "Open Source",
    open_source_desc: `MLSQL is free for everyone to use, and all source code is publicly viewable on GitHub.`,
    download: "Download",
    started: "Get Started",
    code_example: "Code Examples",
    raw_code_example: `load libsvm.\`sample_libsvm_data.txt\` as data;

train data as RandomForest.\`/tmp/model\`;

register RandomForest.\`/tmp/model\` as rf_predict;

select rf_predict(features) from data as result;`,
    try_online_guide: "Try Online",
    try_online_guide_desc: "",
    join_wechat_group: "Join Wechat Group",
    join_wechat_group_desc: "Scan this image to add this robot and send keyword mlsql to join wechat group.",
    aliyun_support: "",
    aliyun_support_desc: "",
    load_save_1: "加载,保存各类数据源",
    load_save_1_desc: "使用Load/Save语法可以加载市面上大部分数据源和数据格式",
    load_save_1_code: `load excel.\`/tmp/data.excel\` as table1;
load hive.\`db.table\` as table1;
...
load es.\`db.table\` as table1;
save overwrite table1 as hive.\`db.table2\`;
`,
    load_save_2: "海量数据处理",
    load_save_2_desc: "用户可以Select语句对load的数据进行分布式处理",
    load_save_2_code: `select * from table1 as newtable;

select split(col1) as col1 as newtable as output; 
`,
    load_save_3: "AI Python支持",
    load_save_3_desc: "可以使用Python完成对SQL处理的数据",
    load_save_4: "AI高阶支持",
    load_save_4_desc: "可以使用高阶模块快速完成算法训练,预测",
    load_save_4_code: `!pyInclude python_example.foreach.py named wow1;

load delta.\`public.consumer_complains\` as cc;

!ray on newcc py.wow1 named mlsql_temp_table2;
`,

}
export default en_US