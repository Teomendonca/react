import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './script.js';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav id='HeaderOptions'>
          {/* <i>icone</i>
          <i>icone</i>
          <i>icone</i> */}
        </nav>
        <nav id='HeaderTitle'>BOM B'Energy</nav>
      </>
    )
  }
}
class Cadastro extends React.Component {
  render() {
    return (
      <div className='Cadastro'>
        <fieldset>
          <legend>Cadastro</legend>
          <label>Nome do Material:</label>
          <input type="text" id="nomeAstro" />

          <label>Descrição:</label>
          <input type="text" id="nomeSistema" />

          <label>Quantidade:</label>
          <input type="number" id="latitude" />

          <label>Data de compra:</label>
          <input type="date" id="longitude" />
          <label>Massa:</label>
          <input type="number" id='magnetude' />
          <label>Custo:</label>
          <input type="number" id='magnetude' />
          <label>Unidade de medida:</label>
          <input type="text" id='magnetude' />

          <button id="cadastrar">Cadastrar</button>
          <button id="limpar">Limpar Formulario</button>

        </fieldset>

        <table>
          <thead>
            <tr>
              <th>Nome do Material</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Data de compra</th>
              <th>Massa</th>
              <th>Custo</th>
              <th>Unidade de medida</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("Cadastro"));
root.render(<Cadastro />);
const navbar = ReactDOM.createRoot(document.getElementById("navbar"));
navbar.render(<NavBar />);
