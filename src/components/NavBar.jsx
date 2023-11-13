import style from "./NavBar.module.css"
import PropTypes from "prop-types";

function NavBar({pokemonIndex, handleClickBack, handleClickNext, pokemonSizeList}) {

    NavBar.propTypes = {
        pokemonIndex: PropTypes.number.isRequired,
        handleClickBack: PropTypes.func.isRequired,
        handleClickNext: PropTypes.func.isRequired,
        pokemonSizeList: PropTypes.number.isRequired
    };

    return(
        <div className={style.buttonContainer}>
            <div className={style.button}>  
                {pokemonIndex > 0 ? <button type="button" onClick={() => handleClickBack()} className={style.button}>Précédent</button> : null}
            </div>
            <div className={style.button}>
            {pokemonIndex < pokemonSizeList - 1  ? <button type="button" onClick={() => handleClickNext()} className={style.button}>Suivant</button> : null}
            </div>
      </div> 
    );
}

export default NavBar;