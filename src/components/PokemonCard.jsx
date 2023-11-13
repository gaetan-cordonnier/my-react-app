function PokemonCard(props) {

    return (
        props.pokemonList.map((element, index) => {
            return (
            <figure key={index}>
            {element.imgSrc ? <img src={element.imgSrc} alt={element.name}/> : <p>???</p>}
            <figcaption style={{'textTransform': 'capitalize'}}>{element.name} </figcaption>
        </figure> )
        })
    );
  }
  
export default PokemonCard;