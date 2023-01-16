import React from "react";
// custom types
import { GameType } from "../../types";
// custom components
import Scorecard from "./Scorecard";
// custom styles
import styles from "./Scoreboard.module.css";

interface Props {
  games: GameType[];
}

function Scoreboard({ games }: Props) {
  // remove finished games
  let showGames = games.filter((game) => !game.finished);

  // order by total score. Game with same score are order by most recently started match
  showGames.sort(function (game1: GameType, game2: GameType) {
    let game1_score = game1.home_score + game1.away_score;
    let game2_score = game2.home_score + game2.away_score;
    return game2_score - game1_score || game2.start_time - game1.start_time;
  });

  return (
    <section aria-label="score board" className={styles.score_board}>
      {showGames.map((game, index) => (
        <Scorecard key={game.id} game={game} index={index} />
      ))}
    </section>
  );
}

export default Scoreboard;