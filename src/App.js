//*importamos donde a sido almacenada mi iamgen
import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";
function App() {
  //*useState para pasar datos entre componentes
  const [characters, setCharacters] = useState(null);

  //*Se crea una funcion donde permite que proceso va a realizar el boton
  const reqApi = async () => {
    //*Declarar consumo de api
    const api = await fetch("https://rickandmortyapi.com/api/character");
    //*Creacr de caracter api para ingresar a mis datos de mi api
    const characterApi = await api.json();
    //*esto es lo que vamos a gusrdar y usar
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">rick & morty</h1>

        {/* metodo if else en react  */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="rick & morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
        {/* caracter es para ingresar a mi otro componentey le envio mis datos por medio de props */}
      </header>
    </div>
  );
}

export default App;
