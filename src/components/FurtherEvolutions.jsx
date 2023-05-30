import { PokemonMiniatures } from "./index";

export const FurtherEvolutions = ({ furtherEvolutions }) => {
    return (
        <>
            {furtherEvolutions.map((finalEvolution, index) => (
                <div className="shadow-lg overflow-hidden bg-white px-2 py-4 rounded-md border hover:shadow-xl transition" key={index}>
                    <span className="flex flex-col text-center gap-1">
                        <span className="capitalize font-bold">{finalEvolution.name}</span>
                        <PokemonMiniatures id={finalEvolution.id} />
                        {finalEvolution.evolutionDetails && (
                            <ul>
                                {finalEvolution.evolutionDetails.map((detail, index) => (
                                    <li key={index} className="flex flex-col">
                                        {detail.trigger.name === "trade" && (<span>Trading</span>)}
                                        {detail.min_level && (<span>Level {detail.min_level}</span>)}
                                        {detail.gender && (<span>{detail.gender == 1 ? "Female" : "Male"}</span>)}
                                        {detail.needs_overworld_rain && (<span>During rain</span>)}
                                        {detail.time_of_day && (<span>{detail.time_of_day}</span>)}
                                        {detail.item && (<span className="capitalize">Use {detail.item.name}</span>)}
                                        {detail.held_item && (<span className="capitalize">holding {detail.held_item.name}</span>)}
                                    </li>
                                )
                                )}
                            </ul>
                        )}
                    </span>
                </div>
            ))}
        </>
    );
}
