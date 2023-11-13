import style from "./PokemonCard.module.css";
import PropTypes from "prop-types";

function PokemonCard(props) {

    PokemonCard.propTypes = {
        pokemonList: PropTypes.shape({
          imgSrc: PropTypes.string,
          name: PropTypes.string.isRequired,
        }),
    };

    const {imgSrc, name} = props.pokemonList;

    return (
        <figure className={style.container}>
            {imgSrc ? <img src={imgSrc} alt={name} className={style.img}/> : <div  className={style.emptyImg}><p className={style.text}>???</p></div>}
            <figcaption className={style.text}>{name} </figcaption>
        </figure> 
    );
  }
  
export default PokemonCard;