import React, {Component} from 'react';
import MLSQLHeader from './components/MLSQLHeader'
import MLSQLApp from './components/MLSQLApp'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MLSQLHeader/>
                <MLSQLApp/>
            </div>
        );
    }
}

export default App;
