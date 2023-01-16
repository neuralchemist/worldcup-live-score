import React, { useState } from "react";
// custom styles
import styles from "./App.module.css";
// custom components
import Scoreboard from "./components/Scoreboard";
// custom types
import { GameType } from "./types";
// custom data
import { games_start, games_update, games_end } from "./data";

function App() {
  let [games, setGames] = useState<GameType[]>(games_start);

  const handleStart = () => {
    setGames(games_start);
  };
  const handleUpdate = () => {
    setGames(games_update);
  };
  const handleEnd = () => {
    setGames(games_end);
  };

  return (
    <div className={styles.app}>
      <h2>Worldcup Live Score</h2>

      <div className={styles.data_control}>
        <button type="button" onClick={handleStart}>
          games start
        </button>
        <button type="button" onClick={handleUpdate}>
          games update
        </button>
        <button type="button" onClick={handleEnd}>
          games end
        </button>
      </div>

      <Scoreboard games={games} />
    </div>
  );
}

export default App;