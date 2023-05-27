import { AllRoutes } from "./components/index.js";
import PokemonProvider from "./context/PokemonProvider";

const App = () => {
    return (
        <PokemonProvider>
            <AllRoutes />
        </PokemonProvider>
    );
}

export default App;
