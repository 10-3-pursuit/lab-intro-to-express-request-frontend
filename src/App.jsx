import { useState, useEffect } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3050/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemon(data.pokemon));
  }, []);

  return (
    <div className="container">
      {pokemon.map((mon) => (
        <div className="card" key={mon.img}>
          <img src={mon.img} alt={mon.name} />
          <p>Name: {mon.name}</p>
          <p>Type/s: {mon.type.join(", ")}</p>
          <p>HP: {mon.stats.hp}</p>
          <p>Attack: {mon.stats.attack}</p>
          <p>Defense: {mon.stats.defense}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
