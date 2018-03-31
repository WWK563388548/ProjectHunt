import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './homePage'

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <HomePage />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));