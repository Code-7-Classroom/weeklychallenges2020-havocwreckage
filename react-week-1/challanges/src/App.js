import React, { Component } from 'react';
import './App.css';
import BasicInfo from './Person';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [
        {
          Name: 'Josue FLores',
          Phone: "704-444-4444",
          DOB: '09/18/1998'
        },
        {
          Name: 'bill nye',
          Phone: '704-222-1431',
          DOB: '08/24/1996'
        },
        {
          Name: 'Lee',
          Phone: '803-534-2573',
          DOB: '01/12/1999'
        },
        {
          Name: 'Carter',
          Phone: '803-245-1672',
          DOB: '05/19/1992'
        }
      ]
  }
}
  render() {
    return(
      <BasicInfo person={this.state.person}/>
    )
    }
}


export default App;