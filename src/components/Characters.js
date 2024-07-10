export default function Characters(props) {
  //*extraccion de dmis datos
  const { characters, setCharacters } = props;
  console.log(characters);
    const resetCharacters =()=>{
        setCharacters(null);
       
    }
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}> Volver a la home</span>
      <div className="container-characters">
        {/* vamos a realizar un recorrido en mis datos con map o foreach */}
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            {/* recuperar o mostrar datos  */}
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              {/* diferenciamos cuales estan vivos y muertos metodo if  */}
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                  </>
                )}
              </h6>
              <p>
              <span className="text-grey">Episodios: </span>
              <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span >{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home"  onClick={resetCharacters}>volver a la home</span>
    </div>
  );
}
