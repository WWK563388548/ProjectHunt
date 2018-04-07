import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './homePage';
import Navbar from './navbar';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section>
                <Navbar user={true} />
                <HomePage />
            </section>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));