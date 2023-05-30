import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader, PokemonCard, StyledButton } from "../components"
import PokemonContext from "../context/PokemonContext";

const SearchView = () => {
    const location = useLocation();
    const { allPokemons, getAllPokemons } = useContext(PokemonContext);
    const [loading, setLoading] = useState(true);

    const getPokemons = async () => {
        await getAllPokemons();
        setLoading(false);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

    return (
        <main className="container mx-auto shadow-md p-6 font-rubik lg:p-4">
            <StyledButton href="/" >Go to pokemons</StyledButton>
            {loading ?
                <div className="flex justify-center"><Loader /></div>
                :
                <>
                    <p>{filteredPokemons.length} Pokemons matched</p>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ">
                        {filteredPokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
                    </ul>
                </>
            }

        </main>
    );
}

export default SearchView;
