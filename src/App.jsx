import { useEffect, useState } from 'react'
import './App.css'
// import './index.css'


const App = () => {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch('http://localhost:8888/pokemon').then(res => res.json()).then(data => setPokemon(data.pokemon))
  }, [])
  return (
    <div>
      <h1>Pokemon Database</h1>
      <ul>
        {pokemon.map((poke) => {
          const { name, img, type, misc, stats } = poke;
          return <li key={img} className="isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
            <img src={img} alt={`image of ${name}`} />
            <h3>{name}</h3>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>Classification: </td>
                  <td>{misc.classification}</td>
                </tr>
                <tr>
                  <td>Type: </td>
                  <td>{type.join(", ")}</td>
                </tr>
                <tr>
                  <td>HP: </td>
                  <td>{stats.hp}</td>
                </tr>
                <tr>
                  <td>Happiness: </td>
                  <td>{misc.happiness}</td>
                </tr>
              </tbody>
            </table>
          </li>
        })}

      </ul>
    </div>
  )
}

export default App
