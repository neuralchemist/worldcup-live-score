import React from "react";
// custom types
import { GameType } from "../../types";
// custom styles
import styles from "./Scoreboard.module.css";

interface Props {
  game: GameType;
  index: number;
}

function Scorecard({ game, index }: Props) {
  return (
    <article aria-label="score card" className={styles.score_card}>
      {/* home team */}
      <div className={styles.home} aria-label="home">
        <span data-testid={`home-team-${index}`}>{game.home_team}</span>
        <span>:</span>
        <span aria-label="home_score">{game.home_score}</span>
      </div>
      {/* away team */}
      <div className={styles.away} aria-label="away">
        <span data-testid={`away-team-${index}`}>{game.away_team}</span>
        <span>:</span>
        <span aria-label="away_score">{game.away_score}</span>
      </div>
    </article>
  );
}

export default Scorecard;