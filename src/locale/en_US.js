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
    load_save_1: "Load and save various data sources",
    load_save_1_desc: "Load most data sources and data formats in Load/Save syntax",
    load_save_1_code: `load excel.\`/tmp/data.excel\` as table1;
load hive.\`db.table\` as table1;
...
load es.\`db.table\` as table1;
save overwrite table1 as hive.\`db.table2\`;
`,
    load_save_2: "Processing of Gigantic Amount Data",
    load_save_2_desc: "Perform distributed processing on loaded data with SELECT statement",
    load_save_2_code: `select * from table1 as newtable;

select split(col1) as col1 as newtable as output; 
`,
    load_save_3: "AI Python support",
    load_save_3_desc: "Use Python to process data which is already processed by SQL",
    load_save_4: "Advanced AI support",
    load_save_4_desc: "Use advanced modules for algorithm training and prediction",
    load_save_4_code: `!pyInclude python_example.foreach.py named wow1;

load delta.\`public.consumer_complains\` as cc;

!ray on newcc py.wow1 named mlsql_temp_table2;
`,

}
export default en_US