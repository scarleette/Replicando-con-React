import React, { Component } from 'react';


class Objeto extends Component {
  render() {
    const personajes = this.props.propPersonajes;
    return (
      <div>
        {personajes.map(elemento => <li>{elemento.nombre} <div><img src={elemento.foto} alt=""/></div></li> )}
      </div>
    );
  }
}












export default Objeto;