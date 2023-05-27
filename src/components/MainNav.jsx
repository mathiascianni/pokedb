import { useContext, useState } from "react";
import { Loader, NavButton } from "./index";
import PokemonContext from "../context/PokemonContext";

export const MainNav = () => {
    const [toggle, setToggle] = useState(false);
    const { getAllPokemonsWithType, resetPokemons, getAllTypes, allTypes, typesLoading } = useContext(PokemonContext);

    const handleAllButton = () => { 
        resetPokemons();
        setToggle(false);
    }
    
    const handleTypeButton = (type) => {
        getAllPokemonsWithType(type);
        setToggle(false);
    }

    return (
        <nav>
            <button className="absolute top-5 left-5 bg-slate-800 text-white font-bold aspect-square w-10 rounded-full sm:hidden z-[3]" onClick={() => setToggle(!toggle)}>{toggle ? "X" : ">"}</button>
            <ul className={`flex flex-col items-center h-screen transition-all duration-700 ${toggle ? "left-0" : "left-[-100%]"} absolute z-[2] bg-neutral-950/80 backdrop-blur w-full md:bg-transparent md:static md:w-32 gap-8 md:gap-4 p-16 md:p-4 overflow-y-scroll`}>
                <li className="w-full"><NavButton type="all" clickEvent={handleAllButton}></NavButton></li>
                {typesLoading ? <Loader /> : allTypes.map(type => <li key={type.name} className="w-full"><NavButton type={type.name} clickEvent={() => handleTypeButton(type.name)}>{type.name}</NavButton></li>)}
            </ul>
        </nav>
    );
}