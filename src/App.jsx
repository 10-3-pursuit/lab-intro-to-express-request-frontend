import React from 'react'
import { useState, useEffect } from "react";

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/pokemon")
      .then((res) => res.json())
      .then((data) => setAllPokemon(data.pokemon));
  }, []);

  return (
    <div className="container">
      {allPokemon.map((monster) => (
          <div className='box'>
            <img src={monster.img}/>
            <div>Name: {monster.name}</div>
            <div>Type: {monster.type}</div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default App;