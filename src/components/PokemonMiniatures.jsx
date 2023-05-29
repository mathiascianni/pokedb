import { useContext, useEffect, useState } from "react"
import PokemonContext from "../context/PokemonContext"
import { Loader } from "./index";
import { Link } from "react-router-dom";

export const PokemonMiniatures = ({ id }) => {
    const { getPokemonByID } = useContext(PokemonContext);
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPokemon(id);
    }, [id]);

    return (
        <>
            {loading ?
                <div className="flex justify-center">
                    <Loader />
                </div>

                :
                <figure className="flex justify-center">
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="sprites aspect-square max-w-[150px]" />
                    </Link>
                </figure>
            }
        </>
    )
}