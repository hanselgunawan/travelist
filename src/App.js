import React, { Component } from 'react';
import Header from './components/Header';
import TestForm from './components/TestForm';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <TestForm />
        </div>
    );
  }
}

export default App;
