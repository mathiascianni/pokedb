import { StyledButton, PokemonImage, BorderedDiv, PokemonGenus, PokemonTypes, PokemonAbilities, Loader, StyledTitle, SmallText, PokemonStats, TypesTable } from "../components";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";

const PokemonDetails = () => {
    const { id } = useParams();
    const { getPokemonByID } = useContext(PokemonContext);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPokemon(id);
    }, []);

    return (
        <main className="container mx-auto shadow-md p-6 font-rubik lg:p-4">
            <StyledButton href="/">Go to Pokemons</StyledButton> 
            {loading ? <Loader /> :
                <>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <PokemonImage sprites={pokemon.sprites} name={pokemon.name} />
                        <div>
                            <BorderedDiv>
                                <span>Species: </span>
                                <PokemonGenus id={id} />
                            </BorderedDiv>
                            <BorderedDiv>
                                <p>National Pokedex: <span className="font-bold">#{id}</span></p>
                            </BorderedDiv>
                            <BorderedDiv>
                                <p>Types:</p>
                                <PokemonTypes pokemon={pokemon} badge={true} />
                            </BorderedDiv>
                            <BorderedDiv>
                                <p>Height: {pokemon.height / 10}m</p>
                            </BorderedDiv>
                            <BorderedDiv>
                                <p>Weight: {pokemon.weight / 10}kg</p>
                            </BorderedDiv>
                            <BorderedDiv>
                                <p>Abilities:</p>
                                <PokemonAbilities pokemon={pokemon} />
                            </BorderedDiv>
                        </div>
                    </section>
                    <section className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        <div className="flex-1 w-full">
                            <StyledTitle type="h2"><span className="capitalize">{pokemon.name}</span> stats</StyledTitle>
                            <PokemonStats pokemon={pokemon} />
                            <SmallText type="p">The ranges shown above are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.</SmallText>
                        </div>
                        <div className="w-full max-w-[600px] lg:max-w-[400px]">
                            <StyledTitle type="h2"><span className="capitalize">{pokemon.name}</span> type defenses</StyledTitle>
                            <TypesTable pokemon={pokemon} />
                        </div>
                    </section>
                </>
            }
        </main>
    );
}

export default PokemonDetails;
