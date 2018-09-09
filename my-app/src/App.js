import React, { Component } from 'react';
import './App.css';
import Titulo from './componentes/Titulo';
import Objeto from './componentes/Objeto';


class App extends Component {
  render() {
    return (
      <div>
        <div className= "App">
          <Titulo/>
        </div>
        <div>
          <Objeto/>
        </div>
      </div>
    );
  }
}

export default App;