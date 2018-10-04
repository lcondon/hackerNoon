import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchArticles } from './actions/searchArticles';
import ArticleList from './components/ArticleList';
import logo from './hack.png';
import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  searchArticles: searchTerm => dispatch(searchArticles(searchTerm))
});

class App extends Component {
  state = {
    searchTerm: ''
  };

  searchArticles = event => {
    this.props.searchArticles(this.state.searchTerm);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ArticleList />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
