import style from "./NavBar.module.css"
import PropTypes from "prop-types";

function NavBar({ displayPokemon, pokemonList}) {

    NavBar.propTypes = {
        displayPokemon: PropTypes.func.isRequired,
        pokemonList: PropTypes.array.isRequired
    };

    function openPikachuAlert(pokemon) {
        pokemon == "pikachu" ? alert("Pika Pikachu !!!") : false;
    }

    return(
        <div className={style.buttonContainer}>
            {
                pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => {displayPokemon(index), openPikachuAlert(pokemon.name)}} className={style.button}>{pokemon.name}</button>))
            }
        </div>
    );
}

export default NavBar;