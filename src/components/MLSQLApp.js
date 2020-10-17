import React, {Component} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import mlsqlLogo from "../image/mlsql-logo.png";
import {FormattedMessage} from "react-intl";


export default class MLSQLApp extends Component {


    render() {

        return (<div className="MLSQLApp">
                <div className="body">
                    <div className="p1">
                        <div className="p1-wrap">
                            <div className="p1-logo logo-color">
                                <img alt='' src={mlsqlLogo}/>
                            </div>
                            <p className="p1-text"><FormattedMessage id="desc"/></p>
                            <div className="p1-bar">
                                <a className="p1-bar-item"
                                   href="http://download.mlsql.tech"><FormattedMessage id="download"/></a>
                                <a className="p1-bar-item"
                                   href="http://docs.mlsql.tech/mlsql-console/"><FormattedMessage id="started"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p2-item">

                    <div className="col-3" style={{marginLeft: 0}}>
                        <h2><FormattedMessage id={"ease_of_use"}/></h2>
                        <p>
                            <FormattedMessage id={"ease_of_use_desc"}/>
                        </p>

                    </div>

                    <div className="col-3">
                        <h2><FormattedMessage id={"data_security"}/></h2>
                        <p>
                            <FormattedMessage id={"data_security_desc"}/>
                        </p>
                    </div>

                    <div className="col-3">
                        <h2><FormattedMessage id={"aliyun_support"}/></h2>
                        <p>
                            <FormattedMessage id={"aliyun_support_desc2"}/>
                        </p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="hr"></div>
                </div>


                <div className="p2-item">

                    <div className="col-1">
                        <h2><FormattedMessage id={"load_save_2"}/></h2>
                        <p><FormattedMessage id={"load_save_2_desc"}/></p>
                        <div className="pre-container">
                            <h3>MLSQL</h3>
                            <div className="pre-container-code">
                                <img width={"800px"}  src="http://docs.mlsql.tech/upload_images/WechatIMG67.png"></img>
                                {/*<SyntaxHighlighter language='sql' style={dark}>*/}
                                {/*    <FormattedMessage id={"load_save_2_code"}/>*/}
                                {/*</SyntaxHighlighter>*/}


                            </div>
                        </div>
                    </div>

                    <div className="col-1">
                        <h2><FormattedMessage id={"load_save_1"}/></h2>
                        <p><FormattedMessage id={"load_save_1_desc"}/></p>
                        <div className="pre-container">
                            <h3>MLSQL</h3>
                            <div className="pre-container-code">
                                <img width={"1000px"} src={"http://docs.mlsql.tech/upload_images/a08212c7-bb3a-4e64-b81e-d7c5e789a040.png"}></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-1">
                        <h2><FormattedMessage id={"load_save_3"}/></h2>
                        <p><FormattedMessage id={"load_save_3_desc"}/></p>
                        <div className="pre-container">
                            <h3>MLSQL</h3>
                            <div className="pre-container-code">
                                <img width={"1000px"} src={"http://docs.mlsql.tech/upload_images/d5dd05ae-62ed-403d-9500-42a38bdbcc26.png"}></img>
                                {/*<SyntaxHighlighter language='sql' style={dark}>*/}
                                {/*    {<FormattedMessage id={"load_save_4_code"}/>}*/}
                                {/*</SyntaxHighlighter>*/}


                            </div>
                        </div>
                    </div>
                    <div className="hr"></div>
                </div>

                <div className="p2-item">
                    <div className="col-3" style={{marginLeft: 0}}>
                        <h2><a href={"http://blog.mlsql.tech/blog/demo.html"}><FormattedMessage id={"try_online_guide"}/></a></h2>
                        <p>
                           <FormattedMessage id={"try_online_guide_desc"}/>
                        </p>
                    </div>

                    <div className="col-3">
                        <h2><a href={"http://blog.mlsql.tech/blog/cloud_oss_analysis.html"}><FormattedMessage id={"aliyun_support"}/></a></h2>
                        <p>
                            <FormattedMessage id={"aliyun_support_desc"}/>
                        </p>
                    </div>

                    <div className="col-3">
                        <h2><FormattedMessage id={"join_wechat_group"}/></h2>
                        <p><FormattedMessage id={"join_wechat_group_desc"}/> </p>
                        <p>
                        <img  height="200" src="http://docs.mlsql.tech/upload_images/WechatIMG80.png"></img>
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
