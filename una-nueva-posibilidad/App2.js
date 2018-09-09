import React, { Component } from 'react';
import './App.css';
import Titulo from './componentes/Titulo';
import Objeto from './componentes/Objeto';

const personajes = [
  {
    nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
  }, 
  {
    nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
  }, 
  {
    nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
  },
  {
    nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
  }];


class App extends Component {
  render() {
    return (
      <div>
        <header className= "App">
          <Titulo/>
        </header>
        <body>
          <Objeto propPersonajes={personajes} />
        </body>
      </div>
    );
  }
}

export default App;