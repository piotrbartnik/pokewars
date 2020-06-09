import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  pokemonName: string;
};

const Card: React.FC<CardProps> = ({ pokemonName }) => {
  return <div className={styles.card}>{pokemonName}</div>;
};

export default Card;
