import { Link } from "react-router-dom";
import { StyledTitle } from "../components";

const View404 = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center">
                <img src="/img/pokedb-logo.png" alt="Pokemondb logo" />
            </div>
            <StyledTitle type="h1" >Whoops...</StyledTitle>
            <p className="my-4">It seems that you are trying to access a place that does not exist</p>
            <p>If you are searching for Legendary Pokemons you can search <Link to="/" className="text-blue-400" >here!</Link></p>
            <Link to="/" className="bg-blue-500 w-full md:w-auto inline-block my-4 p-4 font-bold text-center text-white hover:bg-blue-600 transition">Go Back</Link>
        </div>
    );
}

export default View404;
