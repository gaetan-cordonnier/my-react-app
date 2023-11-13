function PokemonCard() {

    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];

    return (
        pokemonList.map((element, index) => {
            return (
            <figure key={index}>
            {element.imgSrc ? <img src={element.imgSrc} alt={element.name}/> : <p>???</p>}
            <figcaption style={{'textTransform': 'capitalize'}}>{element.name} </figcaption>
        </figure> )
        })
    );
  }
  
export default PokemonCard;