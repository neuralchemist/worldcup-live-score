import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Scoreboard from "./Scoreboard";
// custom data
import { games_start, games_update, games_end } from "../../data";

describe("Scoreboard", () => {
  describe("At Start", () => {
    beforeEach(() => {
      render(<Scoreboard games={games_start} />);
    });

    it("check scoreboard has 5 items", () => {
      const list = screen.getAllByRole("article");
      expect(list.length).toBe(5);
    });

    it("first home team is Argentina", () => {
      const { getByText } = within(screen.getByTestId("home-team-0"));
      expect(getByText("Argentina")).toBeInTheDocument();
    });

    it("first away team is Australia", () => {
      const { getByText } = within(screen.getByTestId("away-team-0"));
      expect(getByText("Australia")).toBeInTheDocument();
    });

    it("last home team is Spain", () => {
      const { getByText } = within(screen.getByTestId("home-team-4"));
      expect(getByText("Spain")).toBeInTheDocument();
    });

    it("last away team is Brazil", () => {
      const { getByText } = within(screen.getByTestId("away-team-4"));
      expect(getByText("Brazil")).toBeInTheDocument();
    });
  });

  describe("At Update", () => {
    beforeEach(() => {
      render(<Scoreboard games={games_update} />);
    });

    it("check scoreboard has 5 items", () => {
      const list = screen.getAllByRole("article");
      expect(list.length).toBe(5);
    });

    it("first home team is Uruguay", () => {
      const { getByText } = within(screen.getByTestId("home-team-0"));
      expect(getByText("Uruguay")).toBeInTheDocument();
    });

    it("first away team is Italy", () => {
      const { getByText } = within(screen.getByTestId("away-team-0"));
      expect(getByText("Italy")).toBeInTheDocument();
    });

    it("last home team is Germany", () => {
      const { getByText } = within(screen.getByTestId("home-team-4"));
      expect(getByText("Germany")).toBeInTheDocument();
    });

    it("last away team is France", () => {
      const { getByText } = within(screen.getByTestId("away-team-4"));
      expect(getByText("France")).toBeInTheDocument();
    });
  });

  describe("At End", () => {
    beforeEach(() => {
      render(<Scoreboard games={games_end} />);
    });

    it("check scoreboard has 3 items", () => {
      const list = screen.getAllByRole("article");
      expect(list.length).toBe(3);
    });

    it("first home team is Uruguay", () => {
      const { getByText } = within(screen.getByTestId("home-team-0"));
      expect(getByText("Uruguay")).toBeInTheDocument();
    });

    it("first away team is Italy", () => {
      const { getByText } = within(screen.getByTestId("away-team-0"));
      expect(getByText("Italy")).toBeInTheDocument();
    });

    it("last home team is Argentina", () => {
      const { getByText } = within(screen.getByTestId("home-team-2"));
      expect(getByText("Argentina")).toBeInTheDocument();
    });

    it("last away team is Australia", () => {
      const { getByText } = within(screen.getByTestId("away-team-2"));
      expect(getByText("Australia")).toBeInTheDocument();
    });
  });
});