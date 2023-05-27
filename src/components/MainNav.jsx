import { useContext } from "react";
import { Loader, NavButton } from "./index";
import PokemonContext from "../context/PokemonContext";

export const MainNav = () => {
    const { getAllPokemonsWithType, resetPokemons, getAllTypes, allTypes, typesLoading } = useContext(PokemonContext);

    return (
        <nav>
            <ul className="flex flex-col items-center h-screen w-32 gap-4 p-4 overflow-y-scroll">
                <li className="w-full"><NavButton type="all" clickEvent={() => resetPokemons()}></NavButton></li>
                {typesLoading ? <Loader /> : allTypes.map(type => <li key={type.name} className="w-full"><NavButton type={type.name} clickEvent={() => getAllPokemonsWithType(type.name)}>{type.name}</NavButton></li>)}
            </ul>
        </nav>
    );
}