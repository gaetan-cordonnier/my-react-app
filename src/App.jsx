import style from "./App.module.css"
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  return (
      <div className={style.container}>
        <PokemonCard pokemonList={pokemonList[pokemonIndex]} />
        <div className={style.buttonContainer}>
          <div className={style.button}>  
            {pokemonIndex > 0 ? <button type="button" onClick={() => setPokemonIndex(pokemonIndex -1)} className={style.button}>Précédent</button> : null}
          </div>
          <div className={style.button}>
            {pokemonIndex < pokemonList.length - 1  ? <button type="button" onClick={() => setPokemonIndex(pokemonIndex +1)} className={style.button}>Suivant</button> : null}
          </div>
        </div>
      </div>
  )
}

export default App
