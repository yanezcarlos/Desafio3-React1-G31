import { useState } from "react";
import "./App.css";
// import Button from 'react-bootstrap/Button';
import { BaseColaboradores } from "./colaboradores.js";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] =
    useState(BaseColaboradores);
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");

  const agregarColaborador = (e) => {
    e.preventDefault();
    // alert("hola");
    const nuevoColaborador = {
      // "id": {colaboradores.length+1},
      id: 4,
      nombre: nombreColaborador,
      correo: correoColaborador,
    };

    // colaboradores.push(nuevoColaborador);
    // setColaboradores([...colaboradores]);
    setColaboradores([...colaboradores, nuevoColaborador]);
    setNombreColaborador("");
    setCorreoColaborador("");
  };

  const filtrarColaboradores = (search) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.includes(search) ||
        colaborador.correo.includes(search)
      );
    });
    setColaboradoresFiltrados([...colaboradoresFiltrados]);
  };

  return (
    <div className="App">
      <form onSubmit={agregarColaborador}>
        <label>Nombre del colaborador</label>
        <input
          type="text"
          id="nombre"
          value={nombreColaborador}
          onChange={(e) => setNombreColaborador(e.target.value)}
        />
        <label>Correo del colaborador</label>
        <input
          type="text"
          id="correo"
          value={correoColaborador}
          onChange={(e) => setCorreoColaborador(e.target.value)}
        />
        <div>
          {/* <Button variant="dark">Agregar</Button> */}
          <button type="submit">Agregar</button>
        </div>
      </form>

      <hr />
      <h1>Listado de Colaboradores</h1>
      <hr />

      <input
        type="text"
        onChange={(e) => filtrarColaboradores(e.target.value)}
        placeholder="Buscar colaborador"
      />

      <ul>
        {colaboradoresFiltrados.map((colaborador, i) => (
          <li key={i}>
            {colaborador.nombre} - {colaborador.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
