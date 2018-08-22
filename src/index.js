import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
import indexHTML from './index.html';
import booksJSON from './books.json';
import serverJS from './server.js';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <SearchForm />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);