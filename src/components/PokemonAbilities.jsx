export const PokemonAbilities = ({ pokemon }) => {
    const pokeAbilities = pokemon.abilities.map(ability => ability);
    const pokeAbilitiesNames = pokeAbilities.map(({ ability: { name }, is_hidden }) => ({ name, is_hidden }));

    return (
        <div className="flex flex-col">
            {pokeAbilitiesNames.map((ability, index) =>
                <div key={index} className="flex items-center gap-0.5">
                    <a href="#" className="capitalize text-blue-400 hover:text-blue-500 transition">{ability.name}</a>
                    {ability.is_hidden ? <span className="text-sm text-slate-400">(hidden ability)</span> : ""}
                </div>)}
        </div>
    );
}