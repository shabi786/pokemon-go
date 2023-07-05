import React, { useState, useEffect } from 'react';
import PokemonImage from './PokemonImage';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const getPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await response.json();
        setPokemon(data.results)
    }
    useEffect(() => {
        getPokemon();
    }, [])

    const limitedPokemon = pokemon.slice(0, 20);
    return (
        <div className="container">
            {
                limitedPokemon.map((character) => (
                    <div key={character.name} className="card">
                        <h3>{character.name}</h3>
                        <PokemonImage url={character.url} />
                    </div>
                ))
            }
        </div>
    )
}

export default PokemonList;