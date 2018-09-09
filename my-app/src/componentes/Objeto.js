import React, { Component } from 'react';


class Objeto extends Component {
  render() {
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

      let contador = 1;

    return (
      <div>
        {personajes.map(elemento => 
        <ul className = "tarjeta">
          <h3 className = "App">Informacion</h3>
          <h3>Tarjeta N°{contador ++} : {elemento.nombre} </h3>
          <div> 
            <img src={elemento.foto} alt=""/> 
          </div>
        </ul>)}
      </div>
    );
  }
}

export default Objeto;