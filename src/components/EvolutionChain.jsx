import React, { useContext, useEffect } from "react"
import PokemonContext from "../context/PokemonContext"
import { FurtherEvolutions, LastEvolutionDetails, Loader, PokemonMiniatures, StyledTitle } from "./index.js";

export const EvolutionChain = ({ url, name }) => {
    const { evolutionChain, getPokemonEvolutionTree, chainLoading, getPokemonByID } = useContext(PokemonContext);

    useEffect(() => {
        getPokemonEvolutionTree(url);
    }, []);

    return (
        <div>
            <StyledTitle type="h2">Evolution tree</StyledTitle>
            <ul>
                {chainLoading ? (
                    <Loader />
                ) : evolutionChain.length > 1 ? (
                    <li className="grid grid-cols-2 gap-2">
                        <>
                            {evolutionChain.map((pokemon, index) => {
                                const lastEvolutionDetails = pokemon.evolutionDetails[pokemon.evolutionDetails.length - 1] || [];
                                const furtherEvolutions = pokemon.furtherEvolutions || [];

                                return (
                                    <React.Fragment key={index}>
                                        <LastEvolutionDetails lastEvolutionDetails={lastEvolutionDetails} pokemon={pokemon} />
                                        {furtherEvolutions.length > 0 && (<FurtherEvolutions furtherEvolutions={furtherEvolutions} />)}
                                    </React.Fragment>
                                );
                            })}
                        </>
                    </li>
                ) : (
                    <span>
                        <span className="capitalize">{name}</span> doesn't evolve
                    </span>
                )}
            </ul>
        </div>
    );
}
