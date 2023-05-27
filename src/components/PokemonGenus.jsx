import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { Loader } from "./index.js"

export const PokemonGenus = ({ id }) => {
    const { getPokemonSpecies } = useContext(PokemonContext);
    const [genera, setGenera] = useState({});
    const [loading, setLoading] = useState(true);

    const getSpecies = async (id) => {
        const res = await getPokemonSpecies(id);
        const generaEng = res.genera.filter(pokemon => pokemon.language.name === "en");
        setGenera(generaEng);
        setLoading(false);
    }

    useEffect(() => {
        getSpecies(id);
    }, []);

    return (
        <div>
            {loading ? <Loader /> : genera.map((pokemon, index) => <p key={index}>{pokemon.genus}</p>)}
        </div>
    );
}