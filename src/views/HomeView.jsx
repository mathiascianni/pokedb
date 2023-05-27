import { useContext } from "react";
import { PokemonList, MainNav, FilterBar, StyledTitle, StyledButton } from "../components";
import PokemonContext from "../context/PokemonContext";

const HomeView = () => {
    const { handleLoadMore } = useContext(PokemonContext);

    return (
        <div className="flex font-rubik">
            <MainNav />
            <main className="w-full flex-1 max-h-screen overflow-y-scroll">
                <div className="p-4 flex justify-center">
                    <img src="/img/pokedb-logo.png" alt="PokeDB logo" />
                </div>
                <FilterBar />
                <PokemonList />
                <div className="text-center">
                    <StyledButton clickFunction={handleLoadMore}>Load More</StyledButton>
                </div>
            </main>
        </div>
    );
}

export default HomeView;
