import { useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import PokemonContext from "./PokemonContext";

const PokemonProvider = ({ children }) => {
    // Estados para almacenar pokemons
    const [limitedPokemons, setLimitedPokemons] = useState([]);
    const [limitedTypePokemons, setLimitedTypePokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [allTypes, setAllTypes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [type, setType] = useState("");
    const [evolutionChain, setEvolutionChain] = useState([]);
    const [buttonLoader, setButtonLoader] = useState([]);
    

    // Estados para manejar la aplicación
    const [loading, setLoading] = useState(true);
    const [typesLoading, setTypesLoading] = useState(true);
    const [chainLoading, setChainLoading] = useState(true);

    const { valueSearch, onInputChange, onResetForm } = useForm({ valueSearch: "" });

    /**
     * Trae todos los pókemons con un límite
     * @param {number} limit - Límite de pokemons a traer
     * @returns {void}
     */
    const getAllPokemonsWithLimit = async (limit = 16) => {
        const baseURL = "https://pokeapi.co/api/v2/";
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        const results = await Promise.all(promises);

        setLimitedPokemons([
            ...limitedPokemons,
            ...results
        ]);
        setLoading(false);
        setButtonLoader(false);
    }

    const getAllPokemonsWithType = async (pokType) => {
        setType(pokType);
        const baseURL = "https://pokeapi.co/api/v2/type/";
        const res = await fetch(`${baseURL}${pokType}`);
        const data = await res.json();

        const filteredPokemon = data.pokemon.filter(poke => {
            const id = parseInt(poke.pokemon.url.split("/")[6]);
            return id <= 1010;
        });

        const promises = filteredPokemon.map(async (poke) => {
            const res = await fetch(poke.pokemon.url);
            const data = await res.json();
            return data;
        });

        const results = await Promise.all(promises);

        setLimitedTypePokemons([
            ...results
        ]);
        setLoading(false);
    }

    /**
     * Trae todos los pokemons
     * @returns {void}
     */
    const getAllPokemons = async () => {
        const baseURL = "https://pokeapi.co/api/v2/";
        const res = await fetch(`${baseURL}pokemon?limit=1010&offset=0`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        const result = await Promise.all(promises);

        setAllPokemons(result);
        setLoading(false);
    }

    /**
     * Trae un pokemon específico en base a su id
     * @param {number} id - ID del pokemon a buscar
     * @returns {object} - Devuelve el pokemon buscado.
     */
    const getPokemonByID = async (id) => {
        const baseURL = "https://pokeapi.co/api/v2/";
        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();

        return data;
    }

    const getPokemonSpecies = async (id) => {
        const baseURL = `https://pokeapi.co/api/v2/pokemon-species/`;
        const res = await fetch(`${baseURL}${id}`);
        const data = await res.json();

        return data;
    }

    const getAllTypes = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/type`);
        const data = await res.json();
        const types = data?.results?.slice(0, -2);

        setAllTypes(types);
        setTypesLoading(false)
    }

    const getTypeDetails = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        return data;
    }

    const getPokemonEvolutionTree = async (id) => {
        const species = await getPokemonSpecies(id);
        const res = await fetch(species.evolution_chain.url);
        const data = await res.json();

        const chain = data.chain;
        const evolutionChain = [];

        const currentPokemon = {
            name: chain.species.name,
            id: chain.species.url.split('/').slice(-2, -1)[0],
            evolutionDetails: chain.evolution_details,
        };
        evolutionChain.push(currentPokemon);

        // Obtener la información de las posibles evoluciones del Pokémon actual
        if (chain.evolves_to.length > 0) {
            chain.evolves_to.forEach(async (evolution) => {
                const furtherEvolutions = [];
                evolution.evolves_to.forEach(async (finalEvolution) => {
                    const finalPokemon = {
                        name: finalEvolution.species.name,
                        id: finalEvolution.species.url.split('/').slice(-2, -1)[0],
                        evolutionDetails: finalEvolution.evolution_details,
                    };
                    furtherEvolutions.push(finalPokemon);
                });
                const pokemon = {
                    name: evolution.species.name,
                    id: evolution.species.url.split('/').slice(-2, -1)[0],
                    evolutionDetails: evolution.evolution_details,
                    furtherEvolutions: furtherEvolutions,
                };
                evolutionChain.push(pokemon);
            });
        }

        setEvolutionChain(evolutionChain);
        setChainLoading(false);
    }

    const resetPokemons = () => {
        setType("")
        setLimitedTypePokemons([]);
    }

    const handleLoadMore = () => {
        setOffset(offset + 16);
        setButtonLoader(true);
    }

    useEffect(() => {
        getAllPokemonsWithLimit();
    }, [offset]);

    useEffect(() => {
        getAllTypes();
    }, []);


    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                limitedPokemons,
                allPokemons,
                getPokemonByID,
                getPokemonSpecies,
                getTypeDetails,
                handleLoadMore,
                loading,
                getAllPokemonsWithType,
                type,
                limitedTypePokemons,
                resetPokemons,
                allTypes,
                typesLoading,
                evolutionChain,
                getPokemonEvolutionTree,
                chainLoading,
                getAllPokemons,
                buttonLoader
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;
