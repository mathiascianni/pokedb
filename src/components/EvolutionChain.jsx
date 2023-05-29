import { useContext, useEffect } from "react"
import PokemonContext from "../context/PokemonContext"
import { StyledTitle } from "./index.js";

export const EvolutionChain = ({ url }) => {
    const { evolutionChain, getPokemonEvolutionTree } = useContext(PokemonContext);

    useEffect(() => {
        getPokemonEvolutionTree(url);
    }, []);

    return (
        <div>
            <StyledTitle type="h2">Evolution tree</StyledTitle>
            <ul className="flex flex-col gap-2">
                {evolutionChain.length > 1 ? (
                    evolutionChain.map((pokemon, index) => {
                        const lastEvolutionDetails = pokemon.evolutionDetails[pokemon.evolutionDetails.length - 1] || [];
                        const furtherEvolutions = pokemon.furtherEvolutions || [];

                        return (
                            <li className="flex flex-col gap-2">
                                <span className="flex flex-col text-center gap-1 bg-blue-200">
                                    <span className="capitalize">{pokemon.name}</span>
                                    {pokemon.evolutionDetails && (
                                        <ul className="flex flex-col gap-1">
                                            {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.min_level && (<li><span>Level {lastEvolutionDetails.min_level}</span></li>)}
                                            {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.item && (<li><span className="capitalize">Give {lastEvolutionDetails.item.name}</span></li>)}
                                            {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.min_happiness && (<li><span>High friendship</span></li>)}
                                            {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.time_of_day !== "" && (<li>at <span className="capitalize">{lastEvolutionDetails.time_of_day}</span></li>)}
                                            {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.turn_upside_down && (<li><span>Holding console upside down</span></li>)}
                                            {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.trigger.name === "trade" && (<li><span>Trading</span></li>)}
                                            {pokemon.name === "shedinja" ? (<><li>Level 20</li><li><span>Empty spot in party, Pokéball in bag</span></li></>) : ""}
                                        </ul>
                                    )}
                                </span>
                                {furtherEvolutions.length > 0 && (
                                    <>
                                        {furtherEvolutions.map((finalEvolution, index) => (
                                            <span key={index} className="flex flex-col text-center gap-1 bg-blue-200">
                                                <span className="capitalize">{finalEvolution.name}</span>

                                                {finalEvolution.evolutionDetails && (
                                                    <ul>
                                                        {finalEvolution.evolutionDetails.map(
                                                            (detail, index) => (
                                                                <>
                                                                    {detail.min_level && (<li><span>Level {detail.min_level}</span></li>)}
                                                                    {detail.needs_overworld_rain && (<li><span>During rain</span></li>)}
                                                                    {detail.time_of_day && (<li><span>{detail.time_of_day}</span></li>)}
                                                                    {detail.item && (<li><span>{detail.item.name}</span></li>)}
                                                                    {detail.held_item && (<li><span className="capitalize">holding {detail.held_item.name}</span></li>)}
                                                                    {detail.trigger.name === "trade" && (<li><span>Trading</span></li>)}
                                                                </>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </span>
                                        ))}
                                    </>
                                )}
                            </li>
                        );
                    })
                ) : (
                    <span>
                        <span className="capitalize">{name}</span> doesn't evolve
                    </span>
                )}
            </ul>
        </div>
    );
}
