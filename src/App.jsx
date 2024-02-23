import {useEffect, useState} from "react";


const App = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3222/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemon(data.pokemon));
      
  }, []);

  return (
    <>
      <header>
        <h1>Pokemon API</h1>
      </header>
      <main>
        {pokemon.map((element) => (
          <div key={element.img}>
            <h3>{element.name}</h3>
            <img src={`${element.img}`} alt={`${element.name}`} />
          </div>
        ))}
      </main>
    </>
  )
}

export default App
