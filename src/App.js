import React, {Component} from 'react';
import {IntlProvider} from "react-intl"
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import MLSQLHeader from './components/MLSQLHeader'
import MLSQLApp from './components/MLSQLApp'

class App extends Component {
    render() {
        const lang = "zh"
        return (
            <IntlProvider locale={lang} messages={zh_CN}>
            <div className="App">
                <MLSQLHeader/>
                <MLSQLApp/>
            </div>
            </IntlProvider>
        );
    }
}

export default App;
