import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(
        () => {
          return {monsters: users}
        }
      ));
  }

  // About this anonymous function: create new value user input and change state value to it
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  };

  render() {
    // cast states and function to values for optimization
    // -> we don't need to write "this." and "this.state" for calling specific values.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // create an array of values that much with user's input value(state : earchField)
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
