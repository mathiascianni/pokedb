import { useContext } from "react";
import { Loader, PokemonCard } from "./index.js";
import PokemonContext from "../context/PokemonContext.jsx";

export const PokemonList = () => {

    const { limitedPokemons, loading, type, limitedTypePokemons } = useContext(PokemonContext);

    return (
        <>
            <h2 className="text-center">All the <span className="capitalize">{type}</span> Pokemons</h2>
            {loading ? <Loader /> : 
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ">
                {limitedTypePokemons.length > 0 ? limitedTypePokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />) : limitedPokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />)}
            </ul>}

        </>
    );
}