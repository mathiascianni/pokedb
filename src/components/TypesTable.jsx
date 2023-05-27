import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { DamageRelations } from "./DamageRelations";
import pokemonTypes from "../helpers/pokemonTypes";

export const TypesTable = ({ pokemon }) => {
    const pokTypes = pokemon.types.map(type => type.type);
    const pokTypesURL = pokTypes.map(type => type.url);
    const [typeOneURL, typeTwoURL] = pokTypesURL;
    const { getTypeDetails } = useContext(PokemonContext);

    const [typeOne, setTypeOne] = useState({});
    const [typeTwo, setTypeTwo] = useState();
    const [loadingOne, setLoadingOne] = useState(true);
    const [loadingTwo, setLoadingTwo] = useState(true);

    const getTypeOne = async (url) => {
        const res = await getTypeDetails(url);
        setTypeOne(res);
        setLoadingOne(false);
    }

    const getTypeTwo = async (url) => {
        const res = await getTypeDetails(url);
        setTypeTwo(res);
        setLoadingTwo(false);
    }

    useEffect(() => {
        getTypeOne(typeOneURL);
        if(typeTwoURL){
            getTypeTwo(typeTwoURL);
        } else {
            setLoadingTwo(false);
        }
    }, []);

    return (
        <div className="grid grid-cols-9 gap-0.5">
            {!loadingOne && !loadingTwo && pokemonTypes.map((type, index) => (
                <div className="border rounded-md" key={index}>
                    <span className={"uppercase flex items-center justify-center aspect-square text-white font-semibold text-xs rounded-tr-md rounded-tl-md " + type.color}><span className="drop-shadow-[0_0_3px_rgba(0,0,0,1)] ">{type.type.slice(0, 3)}</span></span>
                    <DamageRelations type1={typeOne} type2={typeTwo} type={type} />
                </div>
            ))}
        </div>
    );
}
