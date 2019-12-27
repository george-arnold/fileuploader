import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component () {
  render() {
    return (
      <main className='App'>
      <SearchBar/>
      <FilterableList files = {this.props.files}/>
      </main>
    );
  }
}

export default App;