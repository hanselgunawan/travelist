import React, { Component } from 'react';
import Header from './components/Header';
import TestForm from './components/TestForm';

class App extends Component {
    state = {
        listTitle:"Hansel",
        listDesc:"Los Angeles has plenty of sweet shops, cake spots, and bakeries around the city, many adopting styles and flavors from around the world. It's perhaps the best trademark of LA's approach to baking: it's not tied to any particular style, such as classic European."
    };

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state.listTitle);
    };

  render() {
    return (
        <div>
            <Header/>
            <TestForm
                listTitle={this.state.listTitle}
                listDesc={this.state.listDesc}
                handleInputChange={this.handleInputChange}
            />
        </div>
    );
  }
}

export default App;
