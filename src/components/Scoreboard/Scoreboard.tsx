import React from "react";

// custom types
import { GameType } from "../../types";

interface Props {
  games: GameType[];
}

function Scoreboard({ games }: Props) {
  return <div>Scoreboard</div>;
}

export default Scoreboard;
