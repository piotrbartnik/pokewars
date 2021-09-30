import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "../../components/Card/Card";

const CardHolder = () => {
  const pokemons: string[] = ["bulbazaur", "charizard", "pikachu"];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {pokemons.map((el) => (
          <Card pokemonName={el} />
        ))}
      </div>
    </DndProvider>
  );
};

export default CardHolder;
