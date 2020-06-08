import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';



class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  //Fetch monsters data from API, convert to JSON, then mount to DOM
  //uses Promises
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
      
    //Pull properties off state and set them to constants
      const { monsters,searchField } = this.state;  
      
      const filteredMonsters = monsters.filter( monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
      
      return (
        
        <div className="App">
          <h1> Monsters Rolodex </h1>
          
          <SearchBox 
            placeholder = "search monsters"
            handleChange = {this.handleChange}  
          />
          <CardList monsters={filteredMonsters}/> 
 
        </div>
      );
  }
}

export default App;
