import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonsList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
