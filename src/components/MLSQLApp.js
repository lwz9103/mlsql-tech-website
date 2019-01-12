import React, {Component} from 'react';

export default class MLSQLApp extends Component {
    render() {
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
                                   href="https://github.com/allwefantasy/streamingpro/blob/master/docs/docv2/user-guide.md">Get
                                    Started</a>
                                <a className="p1-bar-item"
                                   href="http://docs.mlsql.tech/zh">中文文档</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p2-item">
                    <div className="col-3" style={{ marginLeft: 0 }}>
                        <h2>Declarative</h2>
                        <p>
                            MLSQL is SQL-like Language. MLSQL is also a
                            distributed compute engine.
                            You can do Batch/Stream/Web Crawler/AI job with MLSQL language through the rest API of MLSQL
                            Engine.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Ease Of Use</h2>
                        <p>
                            MLSQL is a superset of SQL. Master MLSQL is the only requirement if you want to develop
                            BigData and Machine Learning.
                        </p>
                    </div>

                    <div className="col-3">
                        <h2>Runs Everywhere</h2>
                        <p>
                            MLSQL is compatible with Spark 2.2.x/2.3.x/2.4.x means you can run it
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
                        <h2>Machine Learning</h2>
                        <p>MLSQL is realy easy to use, four lines to train a model and predict. </p>
                        <div className="pre-container">
                            <h3>MLSQL code</h3>
                            <div className="pre-container-code">
<pre>
load libsvm.`sample_libsvm_data.txt` as data;<br/>

train data as RandomForest.`/tmp/model`;<br/>

register RandomForest.`/tmp/model` as rf_predict;<br/>

select predict(features)  from data as result;
</pre>
                            </div>
                        </div>
                    </div>

                    <div className="col-1" style={{ marginBottom: 0}}>
                        <h2>Deep Learning</h2>
                        <p>MLSQL supports deep learning. You also can use any python deep learning library in MLSQL.</p>
                        <div className="pre-container">
                            <h3>MLSQL code</h3>
                            <div className="pre-container-code">
<pre>
  train trainData as BigDLClassifyExt.`/tmp/bigdl` where<br/>
disableSparkLog = "true"<br/>
and fitParam.0.featureSize="[3,28,28]"<br/>
and fitParam.0.classNum="10"<br/>
and fitParam.0.maxEpoch="10"<br/>
and fitParam.0.code='''<br/>
                   def apply(params:Map[String,String])= {"{"}<br/>
    val model = Sequential()<br/>
    model.add(Reshape(Array(3, 28, 28), inputShape = Shape(28, 28, 3)))<br/>
    model.add(Dense(params("classNum").toInt, activation = "softmax").setName("fc2"))<br/>
    {"}"}}
    '''
</pre>
                            </div>
                        </div>
                    </div>

                    <div className="hr"></div>
                </div>

                <div className="p2-item">
                    <div className="col-3" style={{ marginLeft: 0 }}>
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
                    MLSQL Licensed under the Apache License, Version 2.0.  @<a className="copyright" href="http://www.miitbeian.gov.cn/">浙ICP备18052520号</a>
                </div>
            </div>
        )
    }
}
