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

        const quickInstall=`bash < (curl http://download.mlsql.tech/scripts/run-all.sh)`

        return (<div className="MLSQLApp">
                <div className="body">
                    <div className="p1">
                        <div className="p1-wrap">
                            <div className="p1-logo logo-color">
                                MLSQL
                            </div>
                            <p className="p1-text">Unify Big Data and Machine Learning</p>
                            <div className="p1-bar">
                                <a className="p1-bar-item"
                                   href="http://download.mlsql.tech">Download</a>
                                <a className="p1-bar-item"
                                   href="http://docs.mlsql.tech/en">Get
                                    Started</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p2-item">
                    <div className="col-3" style={{marginLeft: 0}}>
                        <h2>Declarative</h2>
                        <p>
                            MLSQL is a SQL-Based language, and it's also a distributed compute engine based on Spark.
                            The design goal of the MLSQL is to unify Big Data and Machine Learning, one language, one
                            platform.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Ease Of Use</h2>
                        <p>
                            If you knows SQL, then you knows MLSQL. The MLSQL Console in MLSQL stack provides you a web console
                            which is simple but useful. ETL/ML/Stream/Predict Server even sending mail all can
                            been done by MLSQL.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Runs Everywhere</h2>
                        <p>
                            MLSQL is compatible with Spark 2.3.x/2.4.x. This means you can run it
                            on EC2, on Hadoop YARN, on Mesos, or on
                            Kubernetes. Access data in HDFS, Alluxio, Cassandra, HBase, Hive, and
                            hundreds of other data sources.
                        </p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="hr"></div>
                </div>


                <div className="p2-item">

                    <div className="col-1">
                        <h2>Installing</h2>
                        <p>The install script will install docker containers on your machine.</p>
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
                        <h2>Try online</h2>
                        <p>Visit <a href={"http://try.mlsql.tech"}>http://try.mlsql.tech</a></p>
                        <div className="pre-container">
                            <h3>Login info</h3>
                            <div className="pre-container-code">
                                <SyntaxHighlighter language='sql' style={dark}>
                                    {logInfo}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>

                    <div className="col-1">
                        <h2>Code Example</h2>
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
                        <h2>Getting Started</h2>
                        <p>
                            Learning MLSQL is easy if you are familiar with SQL. Please check <a
                            href="https://github.com/allwefantasy/streamingpro/blob/master/docs/docv2/getting_started/mlsql-grammar.md">MLSQL
                            Grammar</a> or find more examples on <a
                            href="https://github.com/allwefantasy/streamingpro/blob/master/docs/docv2/user-guide.md">our
                            user guide</a>.
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
