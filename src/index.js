import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './style.css';
        
class BookTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }
    
    update() {
        let getId = () => {if (this.props.id) return ":" + this.props.id; return ""};

        axios.get("http://localhost:8080/api/books" + getId())
        .then(res => {
            if (res.data != null) {
                this.setState({ books: res.data });
            } else {
                this.setState({ books: null });
            }
        });
    }

    componentDidMount() {

        setInterval(
            () => this.update(),
            100
        );  
    }

    render() {
        if (this.state.books === null) {
            return (
                <div id="noResult">
                    <p>There is no such book.</p>
                </div>
            );
        }
        return (
            <div id="bookTable">
                <table>
                    <tr>
                        <th>id</th>
                        <th>Title</th> 
                        <th>Description</th>
                        <th>Author</th>
                    </tr>
                        {this.state.books.map(book =>
                            (<tr>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td>{book.author}</td>
                            </tr>)
                    )}                               
                </table>
            </div>
        );
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div>
                <form id="searchForm">
                    Search by id:
                    <input type="text" name="firstname" onChange={this.handleChange}/>
                </form>
                <br />
                <BookTable id={this.state.value} />
            </div>
        );
    }
}

function Header(props) {
    return (
        <div id="header">
            <p>web library</p>
        </div>
    );
}

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