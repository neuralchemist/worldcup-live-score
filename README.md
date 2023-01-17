# worldcup live score

## Test Driven Development
This app is developed using Test Driven Development (TDD). All the tests are implmented using React Testing Library and Jest.

Focused on designing minimuim number of tests that will test the behavior of the component.Tests will not break on refactoring the code, as long as the behavior of the components do not change.

## SOLID principles
* The main component is the Scoreboard. It's function is to render list of games. 
`<Scoreboard games={games}>`.
* The Scoreboard has a subcomponent Scorecard. It's function is to render a single game.
`<Scorecard game={game} index={index}>`.

As long as the **games** data is provided in the correct format, Scoreboard and Scorecard component will function correctly.
We can collect the data at the App component independently.
Scorecard can also be reused for a different Scoreboard.

Could have passed the Scorecard as prop to the Scoreboard. It will allow the Scorboard to have different Scorecard without modifying it's code.
But decided to keep it simple for now.

## The structure of the game:
```
{
  id: string;
  home_team: string;
  away_team: string;
  home_score: number;
  away_score: number;
  start_time: number;
  finished: boolean;
}
```

## Mock Data

The mock data are designed for real game condition:
* **games_start:** data at start of game.
* **games_update:** data after score has updated.
* **games_end:** data after some games have ended.
* game1 and game2 start at same time.
* game3 and game4 start at same time next.
* game5 starts last.
* game1 and game3 are finished at **games_end** data.

The data can be toggled using buttons from the App component.

## Styling
Used CSS module for styling.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

