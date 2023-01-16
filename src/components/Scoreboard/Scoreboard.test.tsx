import { render, screen, within } from "@testing-library/react";

import Scoreboard from "./Scoreboard";
// custom data
import { games_start, games_update, games_end } from "../../data";

describe("Scoreboard", () => {
  describe("At Start", () => {
    beforeEach(() => {
      render(<Scoreboard games={games_start} />);
    });

    it.todo("check scoreboard has 5 items");

    it.todo("first home team is Argentina");

    it.todo("first away team is Australia");

    it.todo("last home team is Spain");

    it.todo("last away team is Brazil");
  });

  describe("At Update", () => {
    beforeEach(() => {
      render(<Scoreboard games={games_update} />);
    });

    it.todo("check scoreboard has 5 items");

    it.todo("first home team is Uruguay");

    it.todo("first away team is Italy");

    it.todo("last home team is Germany");

    it.todo("last away team is France");
  });

  describe("At End", () => {
    beforeEach(() => {
      render(<Scoreboard games={games_end} />);
    });

    it.todo("check scoreboard has 3 items");

    it.todo("first home team is Uruguay");

    it.todo("first away team is Italy");

    it.todo("last home team is Argentina");

    it.todo("last away team is Australia");
  });
});
