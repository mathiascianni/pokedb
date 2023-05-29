import { useEffect, useState } from "react";

export const PokemonImage = ({ sprites, name }) => {
    const [sprite, setSprite] = useState();
    const [alt, setAlt] = useState(`Front sprite of ${name} in default colors`);
    
    useEffect(() => {
        setSprite(sprites.front_default);
    }, [sprites])

    const handleFront = () => {
        setAlt(`Front sprite of ${name} in default colors`);
        setSprite(sprites.front_default);
    }
    const handleBack = () => {
        setAlt(`Back sprite of ${name} in default colors`);
        setSprite(sprites.back_default);
    }
    const handleSFront = () => {
        setAlt(`Front sprite of ${name} in shiny colors`);
        setSprite(sprites.front_shiny);
    }
    const handleSBack = () => {
        setAlt(`Back sprite of ${name} in shiny colors`);
        setSprite(sprites.back_shiny);
    }

    return (
        <div>
            <figure className="border rounded-t-md">
                <img src={sprite} alt={alt} className="sprites w-full drop-shadow-lg" />
            </figure>
            <div className="w-full flex justify-between gap-1">
                <button onClick={handleFront} className="bg-slate-300 w-full rounded-b-md hover:bg-slate-400 transition">Front</button>
                <button onClick={handleBack} className="bg-slate-300 w-full rounded-b-md hover:bg-slate-400 transition">Back</button>
                <button onClick={handleSFront} className="bg-slate-300 w-full rounded-b-md hover:bg-slate-400 transition">Front Shiny</button>
                <button onClick={handleSBack} className="bg-slate-300 w-full rounded-b-md hover:bg-slate-400 transition">Back Shiny</button>
            </div>
        </div>
    );
}