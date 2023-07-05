import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import '/styles.css';

const App = () => {
    return (
        <>
            <Header />
            <PokemonList />
        </>
    )

}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)