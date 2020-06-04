import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

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

  render() {
      
    //Pull properties off state and set them to constants
      const { monsters,searchField } = this.state;  
      
      const filteredMonsters = monsters.filter( monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
      
      return (
        
        <div className="App">
        
          <input 
          type='search' 
          placeholder='search monster' 
          onChange={ e => this.setState({ searchField: e.target.value })}/>
          
          <CardList monsters={filteredMonsters}/> 
 
        </div>
      );
  }
}

export default App;
