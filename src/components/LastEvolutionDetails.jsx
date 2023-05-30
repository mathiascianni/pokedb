import { PokemonMiniatures } from "./index";

export const LastEvolutionDetails = ({ lastEvolutionDetails, pokemon }) => {
    return (
        <div className="flex flex-col text-center gap-1 shadow-lg overflow-hidden bg-white border px-2 py-4 rounded-md hover:shadow-xl transition">
            <div>
                <span className="capitalize font-bold">{pokemon.name}</span>
                <PokemonMiniatures id={pokemon.id} />
            </div>
            {pokemon.evolutionDetails && (
                <ul className="flex flex-col gap-1">
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.min_level && (<li><span>Level {lastEvolutionDetails.min_level}</span></li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.gender && (<li><span>{lastEvolutionDetails.gender == 1 ? "Female" : "Male"}</span></li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.item && (<li><span className="capitalize">Use {lastEvolutionDetails.item.name}</span></li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.min_happiness && (<li><span>High friendship</span></li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.known_move_type && (<li>after <span className="capitalize">{lastEvolutionDetails.known_move_type.name}</span> type move learned</li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.time_of_day !== "" && (<li>at <span className="capitalize">{lastEvolutionDetails.time_of_day}</span></li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.turn_upside_down && (<li><span>Holding console upside down</span></li>)}
                    {lastEvolutionDetails.length !== 0 && lastEvolutionDetails?.trigger.name === "trade" && (<li><span>Trading</span></li>)}
                    {lastEvolutionDetails.length !== 0 && (lastEvolutionDetails?.relative_physical_stats === 1) ? (<li><span>Attack &gt; Defense</span></li>) : lastEvolutionDetails?.relative_physical_stats === -1 ? (<li><span>Attack &lt; Defense</span></li>) : lastEvolutionDetails?.relative_physical_stats === 0 ? (<li><span>Attack &#61; Defense</span></li>) : ""}
                    {pokemon.name === "shedinja" ? (<><li>Level 20</li><li><span>Empty spot in party, Pokéball in bag</span></li></>) : ""}
                </ul>
            )}
        </div>
    );
}
