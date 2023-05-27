import getTypeColor from "../helpers/getTypeColor";

export const PokemonTypes = ({ pokemon, badge = false }) => {
    const types = (pokemon.types.map(type => type.type)).map(name => name.name);
    const colors = !badge ? types.map(type => [getTypeColor(type, false)]) : types.map(type => [getTypeColor(type, true)]);

    return (
        <div className="flex items-center justify-center gap-2 capitalize font-bold">{types && types.map((name, index) => <p key={index} className={(badge ? "text-xs rounded-full py-0.5 px-2 " : "") + colors[index]}>{name}</p>)}</div>
    );
}