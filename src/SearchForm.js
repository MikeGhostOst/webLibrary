import React from 'react';
import BookTable from './BookTable.js';

export default class SearchForm extends React.Component {
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