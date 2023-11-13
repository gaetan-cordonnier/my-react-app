import PropTypes from "prop-types";

function PokemonCard(props) {

    PokemonCard.propTypes = {
        pokemonList: PropTypes.shape({
          imgSrc: PropTypes.string,
          name: PropTypes.string.isRequired,
        })
    };


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