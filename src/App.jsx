import style from "./App.module.css"
import NavBar from "./components/NavBar";
import PokemonCard from './components/PokemonCard'
import { useState, useEffect } from "react";

function App() {
  let [pokemonIndex, setPokemonIndex] = useState(0);


  useEffect(()=>{
    alert("Hello pokemon trainer :)");
  },[]);

  function displayPokemon(index) {
    setPokemonIndex(index)
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
    }
  ];

  return (
      <div className={style.container}>
        <PokemonCard pokemonList={pokemonList[pokemonIndex]} />
        <NavBar displayPokemon={displayPokemon} pokemonList={pokemonList} />
      </div>
  )
}

export default App
