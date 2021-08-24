import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    search() {
        this.props.onSearch(this.state.search);
    }
    
    handleTermChange(event) {
        this.setState({search: event.target.value});
    }
    
    handleKeyPress(event) {
		if (event.key === 'Enter') {
			this.search();
		}
	}
    
    render() {
        return(
            <div className="SearchBar">
             <input type="search" onKeyPress={this.handleKeyPress} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
             <a onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;