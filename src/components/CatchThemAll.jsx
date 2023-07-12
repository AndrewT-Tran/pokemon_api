import React, { useState } from "react";
import "./CatchThemAll.css";
import axios from 'axios';

const CatchThemAll = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then((response) => {
            const names = response.data.results.map((item) => item.name);
            setPokemonList(names);
        })
        .catch((error) => {
            console.log(error);

        });
    };

    return (
        <div className="text-center">
            <div className="header font-sans text-accent text-5xl">Gotta Catch them all...</div>
            <button className='btn my-5 mx-3 btn-error text-white font-sans text-xl' onClick={fetchPokemon}>Fetch</button>
            <button className="btn  text-xl text-slate-600 fonts-sans btn-warning mx-auto" onClick={() => setPokemonList([])}>Clear</button>
            <ul>
                {pokemonList.map((name) => (
                    <li className="text-primary text-xl font-sans text-center" key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CatchThemAll;
