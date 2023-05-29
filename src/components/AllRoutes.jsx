import { Routes, Route } from "react-router-dom";

//Views
import SearchView from "../views/SearchView";
import PokemonDetails from "../views/PokemonDetails";
import HomeView from "../views/HomeView";
import View404 from "../views/View404";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/search" element={<SearchView />} />
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
                <Route path="*" element={<View404 />} />
            </Routes>
        </>
    );
}