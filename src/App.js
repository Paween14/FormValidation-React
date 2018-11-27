import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {

  state = {
    users: []
  };

  addUser = obj => {
    const users = this.state.users.slice ();    // to copy the array without mutating the old array
    users.push(obj);
    this.setState({
      users,
    });
  };

  render() {
    return (
      <div>
        <header className="mt-2 mb-2">
            <h1>Let's talk</h1>
            <p>Think you have what it takes? Show us</p>
        </header>
        <Form addUser={ this.addUser } />
      </div>
    );
  }
}

export default App;
