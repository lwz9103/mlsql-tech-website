import React, {Component} from 'react';
import pineTree from '../image/pine-tree.png';
import github from '../image/github.png';
import search from '../image/search.png';

export default class MLSQLHeader extends Component {
    render() {
        return (<div className="header">

                <div className="header-wrap">
                    <div className="header-nav-left">
                        <div className="nav-item logo logo-color" style={{'padding-left': 0}}>
                            <a href="/">
                                <img src={pineTree} width="22"/>
                                MLSQL
                            </a>
                        </div>
                        <div className="nav-item">
                            <a href="https://github.com/allwefantasy/streamingpro/releases"
                               target="_blank">Downloads</a>
                        </div>
                        <div className="nav-item">
                            <a href="/#" target="_blank">Docs</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://github.com/allwefantasy/streamingpro/blob/master/docs/docv2/user-guide.md"
                               target="_blank">Tutorial</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://github.com/allwefantasy/streamingpro" target="_blank">Community</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://www.jianshu.com/c/759bc22b9e15" target="_blank">Blog</a>
                        </div>
                        <div className="clearfix"></div>
                    </div>

                    <div className="nav-item nav-small header-nav-right">
                        <div className="nav-gitlab">
                            <a href="https://github.com/allwefantasy/streamingpro" target="_blank">GitHub</a>
                            <img src={github} width="16" style={{float: 'right'}}/>
                        </div>
                    </div>

                    <div className="nav-item header-nav-right">
                        <div className="nav-search">
                            <div id="nav-search-form">
                                <img src={search} width="22"/>
                                <input type="text" value="Search docs" className="nav-search-text"
                                       onFocus="this.value=''" onBlur="this.value='Search docs'"/>
                                <input type="submit" value="" style={{display: 'none'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}