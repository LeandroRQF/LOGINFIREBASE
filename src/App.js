import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Inicio from './Componente/Inicio';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">

          <Route path='/' exact component={Inicio} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
