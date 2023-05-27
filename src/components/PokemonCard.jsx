import { StyledButton, PokemonGenus, PokemonTypes, StyledTitle } from "./index.js";

export const PokemonCard = ({ pokemon }) => {
    return (
        <li className="font-rubik">
            <div className="relative flex flex-col items-center gap-4 p-8 rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="relative">
                    <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[300px] sm:h-[300px] w-[120px] h-[120px]">
                        <img src={pokemon.sprites.front_default} alt={"Sprite of " + pokemon.name} className="sprites w-full drop-shadow-lg" />
                    </figure>
                    <span className="text-[80px] sm:text-[200px] text-zinc-200 select-none ">#{pokemon.id}</span>
                </div>

                <div className="z-[1] text-center">
                    <StyledTitle type="h2">{pokemon.name}</StyledTitle>
                    <PokemonGenus id={pokemon.id} />
                    <PokemonTypes pokemon={pokemon} />
                </div>

                <StyledButton href={`/pokemon/${pokemon.id}`}>See stats</StyledButton>
            </div>
        </li>
    );
}