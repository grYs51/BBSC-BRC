import {Player} from './player';

export interface DateGroupedScores {
  Date: Date;
  Completed: boolean;
  SongNames: [string];
  Players: Array<Player>;
}
