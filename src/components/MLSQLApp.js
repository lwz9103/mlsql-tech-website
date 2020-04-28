import React, {Component} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';


export default class MLSQLApp extends Component {


    render() {
        const codeExample = `load libsvm.\`sample_libsvm_data.txt\` as data;

train data as RandomForest.\`/tmp/model\`;

register RandomForest.\`/tmp/model\` as rf_predict;

select rf_predict(features) from data as result;`

        const logInfo = `account:  demo@gmail.com
password: 123456`

        const quickInstall = "bash <(curl http://download.mlsql.tech/scripts/run-all.sh)"

        return (<div className="MLSQLApp">
                <div className="body">
                    <div className="p1">
                        <div className="p1-wrap">
                            <div className="p1-logo logo-color">
                                MLSQL
                            </div>
                            <p className="p1-text">The Programming Language Designed For Big Data and AI</p>
                            <div className="p1-bar">
                                <a className="p1-bar-item"
                                   href="http://download.mlsql.tech">Download</a>
                                <a className="p1-bar-item"
                                   href="http://docs.mlsql.tech/zh/">Get
                                    Started</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p2-item">

                    <div className="col-3" style={{marginLeft: 0}}>
                        <h2>General</h2>
                        <p>
                            MLSQL is designed for Big Data and Machine Learning.
                            It also includes a distributed runtime which can runs on EC2, on Hadoop YARN, on Mesos, or
                            on
                            Kubernetes and access data in HDFS, Alluxio, Cassandra, HBase, Hive, and
                            hundreds of other data sources.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Ease Of Use</h2>
                        <p>
                            MLSQL combines SQL and Python which make it more easy to use in BigData and AI.
                            If you knows Command Line, you knows MLSQL.
                            If you knows SQL, you knows MLSQL.
                            If you knows Python, you knows MLSQL.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Open Source</h2>
                        <p>
                            MLSQL is free for everyone to use, and all source code is publicly viewable on GitHub.
                        </p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="hr"></div>
                </div>


                <div className="p2-item">
                    <div className="col-1">
                        <h2>Code Example</h2>                        
                        <img  height="400" src="http://docs.mlsql.tech/upload_images/WechatIMG67.png"></img>
                    </div>
                    <div className="col-1">
                        <h2>Installing</h2>
                        <p>One line to install with docker support</p>
                        <div className="pre-container">
                            <h3>Shell</h3>
                            <div className="pre-container-code">
                                <SyntaxHighlighter language='shell' style={dark}>
                                    {quickInstall}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                   

                    <div className="col-1">
                        <h2>Pure SQL for AI</h2>
                        <p>MLSQL is realy easy to use, four lines to train a model and predict. </p>
                        <div className="pre-container">
                            <h3>MLSQL code</h3>
                            <div className="pre-container-code">

                                <SyntaxHighlighter language='sql' style={dark}>
                                    {codeExample}
                                </SyntaxHighlighter>


                            </div>
                        </div>
                    </div>


                    <div className="hr"></div>
                </div>

                <div className="p2-item">
                    <div className="col-3" style={{marginLeft: 0}}>
                        <h2>Community</h2>
                        <p>
                            MLSQL is now developing actively, more and more developers are joining our community.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Contributors</h2>
                        <p>
                            This is an active open source project for everyone, and we are always open to people who
                            want to use this system or contribute to it.
                            This guide document introduce <a
                            href="https://github.com/allwefantasy/streamingpro/blob/master/docs/docv2/contribute/contribute.md">how
                            to contribute to MLSQL</a>.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Join Wechat Group</h2>
                        <p>Scan this image to add this robot and send keyword <b>mlsql</b> to join wechat group. </p>
                        <p>
                        <img  height="200" src="http://docs.mlsql.tech/upload_images/WechatIMG63.jpeg"></img>
                        </p>
                    </div>
                    
                    <div className="clearfix"></div>
                </div>

                <div className="hr"></div>

                <div className="p2-item copyright">
                    MLSQL Licensed under the Apache License, Version 2.0. @<a className="copyright"
                                                                              href="http://www.miitbeian.gov.cn/">浙ICP备18052520号</a>
                    <div>@<a target="_blank"
                             href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802009683"><img
                        src=""/>浙公网安备 33010802009683号</a></div>
                </div>
            </div>
        )
    }
}
