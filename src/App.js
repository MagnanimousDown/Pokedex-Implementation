import { useEffect, useState } from "react";
import PokemonThumnail from "./components/PokemonThumnail";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [pokemonIndex, setPokemonIndex] = useState(1); // Starting with the first Pokemon

  const getPokemon = async (index) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await res.json();
    setCurrentPokemon({
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      type: data.types[0].type.name,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
    });
  };

  useEffect(() => {
    getPokemon(pokemonIndex);
  }, [pokemonIndex]);

  const handlePrevious = () => {
    if (pokemonIndex > 1) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        {currentPokemon && (
          <PokemonThumnail 
            id={currentPokemon.id}
            name={currentPokemon.name}
            image={currentPokemon.image}
            type={currentPokemon.type}
            stats={currentPokemon.stats}
          />
        )}
        <div className="navigation-buttons">
          <button onClick={handlePrevious} disabled={pokemonIndex === 1}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
