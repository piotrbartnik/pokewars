import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Card.module.scss";

type CardProps = {
  pokemonName: string;
};

export const ItemTypes = {
  CARD: "card",
};

const Card: React.FC<CardProps> = ({ pokemonName }) => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag} className={styles.card}>
      {pokemonName}
    </div>
  );
};

export default Card;
