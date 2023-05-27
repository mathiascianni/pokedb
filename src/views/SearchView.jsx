import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonCard, StyledButton } from "../components"
import PokemonContext from "../context/PokemonContext";

const SearchView = () => {
    const location = useLocation();
    const { allPokemons } = useContext(PokemonContext);
    const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

    return (
        <main className="container mx-auto shadow-md p-6 font-rubik lg:p-4">
            <StyledButton href="/" >Go to pokemons</StyledButton>
            <p>{filteredPokemons.length} Pokemons matched</p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ">
                {filteredPokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
            </ul>
        </main>
    );
}

export default SearchView;
