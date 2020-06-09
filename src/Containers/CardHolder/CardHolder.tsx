import React from "react";
import Card from "../../components/Card/Card";

const CardHolder = () => {
  const pokemons: string[] = ["bulbazaur", "charizard", "pikachu"];

  return (
    <div>
      {pokemons.map((el) => (
        <Card pokemonName={el} />
      ))}
    </div>
  );
};

export default CardHolder;
