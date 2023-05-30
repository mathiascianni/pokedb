import { useContext } from "react";
import { Loader, PokemonCard, StyledButton, StyledTitle } from "./index.js";
import PokemonContext from "../context/PokemonContext.jsx";

export const PokemonList = () => {
    const { limitedPokemons, loading, type, limitedTypePokemons, handleLoadMore, buttonLoader } = useContext(PokemonContext);

    const loadMore = () => {
        if(!buttonLoader) handleLoadMore()
    }

    return (
        <>
            <div className="text-center">
                <StyledTitle type="h2">All the <span className="capitalize">{type}</span> Pokemons</StyledTitle>
            </div>
            {loading ?
                <div className="text-center">
                    <Loader />
                </div>
                :
                <>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ">
                        {limitedTypePokemons.length > 0 ? limitedTypePokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />) : limitedPokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />)}
                    </ul>
                    <div className="text-center">
                        <StyledButton clickFunction={loadMore}>{buttonLoader ? <Loader /> : "Load More"}</StyledButton>
                    </div>
                </>
            }

        </>
    );
}