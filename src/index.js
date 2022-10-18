import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalCadastro() {
  const [nMaterial, setNMaterial] = useState(" ");
  const [descricao, setDescricao] = useState(" ");
  const [quantidade, setQuantidade] = useState(0);
  const [dataCompra, setDataCompra] = useState(" ");
  const [massa, setMassa] = useState(0);
  const [custo, setCusto] = useState(0);
  const [unidadeMedida, setUnidadeMedida] = useState(" ");

  // function getInputs() {
  //   let input = document.getElementsByTagName("input");

  //   return {
  //     nMat: input[0],
  //     descr: input[1],
  //     qtd: input[2],
  //     dataC: input[3],
  //     mass: input[4],
  //     cust: input[5],
  //     unMed: input[6]
  //   }

  // }
  function limpar() {

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });

  }

  function cadastrar() {
    alert("Cadastrado: enviar para backend");

  }
  return (
    <div>
      <fieldset class="row g-3">
        <legend>Cadastro</legend>
        <div class="row">

          <div class="col-9">
            <label>Nome do Material:</label>
            <input type="text" id="nomeMaterial" class="form-control" placeholder='Nome do material' onChange={(e) => setNMaterial(e.target.value)} />
          </div>
          <div class="col-3">
            <label>Quantidade:</label>
            <input type="number" id="quantidade" class="form-control" onChange={(e) => setQuantidade(e.target.value)} />
          </div>

        </div>
        <div class="row ">

          <div class="col">
            <label>Data de compra:</label>
            <input type="date" id="dataCompra" class="form-control" onChange={(e) => setDataCompra(e.target.value)} />
          </div>
          <div class="col">
            <label>Massa:</label>
            <input type="number" id='massa' class="form-control" onChange={(e) => setMassa(e.target.value)} />
          </div>
          <div class="col">
            <label>Custo:</label>
            <input type="number" id='custo' class="form-control" onChange={(e) => setCusto(e.target.value)} />
          </div>
          <div class="col">
            <label>Unidade de medida:</label>
            <input type="text" id='unidadeMedida' class="form-control" onChange={(e) => setUnidadeMedida(e.target.value)} />

          </div>

        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Item de BOM
              </label>
          </div>
        </div>
        <div class="row">
          <div id="descricao" class="col">
            <label>Descrição:</label>
            <input type="text" id="descricao" class="form-control" onChange={(e) => setDescricao(e.target.value)} />
          </div>
        </div>

        <button id="cadastrar" type="button" class="btn btn-success" onClick={cadastrar}>Cadastrar</button>
        <button id="limpar" type="button" class="btn btn-danger" onClick={limpar}>Limpar</button>

      </fieldset>
    </div>

  )

}
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

export default ModalCadastro;
// class Cadastro extends React.Component {
//   render() {


//     return (
//       <div className='Cadastro'>
//         <fieldset>
//           <legend>Cadastro</legend>
//           <label>Nome do Material:</label>
//           <input type="text" id="nomeAstro" />

//           <label>Descrição:</label>
//           <input type="text" id="nomeSistema" />

//           <label>Quantidade:</label>
//           <input type="number" id="latitude" />

//           <label>Data de compra:</label>
//           <input type="date" id="longitude" />
//           <label>Massa:</label>
//           <input type="number" id='magnetude' />
//           <label>Custo:</label>
//           <input type="number" id='magnetude' />
//           <label>Unidade de medida:</label>
//           <input type="text" id='magnetude' />

//           <button id="cadastrar">Cadastrar</button>
//           <button id="limpar">Limpar Formulario</button>

//         </fieldset>

//         <table>
//           <thead>
//             <tr>
//               <th>Nome do Material</th>
//               <th>Descrição</th>
//               <th>Quantidade</th>
//               <th>Data de compra</th>
//               <th>Massa</th>
//               <th>Custo</th>
//               <th>Unidade de medida</th>
//             </tr>
//           </thead>
//           <tbody>

//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }
// // ========================================

const root = ReactDOM.createRoot(document.getElementById("Cadastro"));
root.render(<ModalCadastro />);
const navbar = ReactDOM.createRoot(document.getElementById("navbar"));
navbar.render(<NavBar />);
