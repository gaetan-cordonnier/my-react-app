import style from "./App.module.css"
import NavBar from "./components/NavBar";
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  function handleClickBack() {
    setPokemonIndex(pokemonIndex - 1)
  }

  function handleClickNext() {
    setPokemonIndex(pokemonIndex + 1)
  }

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
        <NavBar pokemonIndex={pokemonIndex} handleClickBack={handleClickBack} handleClickNext={handleClickNext} pokemonSizeList={pokemonList.length} />
      </div>
  )
}

export default App
