import style from "./NavBar.module.css"
import PropTypes from "prop-types";

function NavBar({ displayPokemon, pokemonList}) {

    NavBar.propTypes = {
        displayPokemon: PropTypes.func.isRequired,
        pokemonList: PropTypes.array.isRequired
    };

    return(
        <div className={style.buttonContainer}>
            {
                pokemonList.map((pokemon, index) => (
                    <button key={pokemon.name} onClick={() => {displayPokemon(index)}} className={style.button}>{pokemon.name}</button>))
            }
        </div>
    );
}

export default NavBar;