export interface GameType {
  id: string;
  home_team: string;
  away_team: string;
  home_score: number;
  away_score: number;
  start_time: number;
  finished: boolean;
}
