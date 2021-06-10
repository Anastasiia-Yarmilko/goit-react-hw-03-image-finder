import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    return (
      <header className="Search">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    query: PropTypes.string,
};

export default Search;