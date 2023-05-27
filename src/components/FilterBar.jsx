import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";

export const FilterBar = () => {
    const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);

    const navigate = useNavigate();

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (valueSearch.trim() != "") {
            navigate("/search", {
                state: valueSearch
            });
            onResetForm();
        }
    }

    return (
        <form className="my-4 px-4 flex" onSubmit={onSearchSubmit}>
            <label htmlFor="search" className="sr-only">Search pokemon</label>
            <input
                id="search"
                type="text"
                name="valueSearch"
                className="border rounded-bl-full rounded-tl-full border-slate-400 w-full flex-1 p-2 pl-4"
                placeholder="Search Pokemon"
                value={valueSearch}
                onChange={onInputChange}
            />
            <button type="submit" className="bg-slate-400 rounded-br-full rounded-tr-full p-2 text-white hover:bg-slate-600 border border-slate-400 hover:border-slate-600 transition">Search</button>
        </form>
    );
}