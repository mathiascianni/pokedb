
import { PokemonList, MainNav, FilterBar } from "../components";

const HomeView = () => {


    return (
        <div className="flex font-rubik">
            <MainNav />
            <main className="w-full flex-1 max-h-screen overflow-y-scroll">
                <div className="p-4 flex justify-center">
                    <img src="/img/pokedb-logo.png" alt="PokeDB logo" />
                </div>
                <FilterBar />
                <PokemonList />
            </main>
        </div>
    );
}

export default HomeView;
