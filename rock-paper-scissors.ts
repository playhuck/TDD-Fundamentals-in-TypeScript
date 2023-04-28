export enum Move {
  Paper = "Paper",
  Rock = "Rock",
  Scissors = "Scissors",
}

export enum Outcome {
  PlayerWins = "Player Wins",
  PlayerLoses = "Player Loses",
  Tie = "Tie",
}

interface RockPaperScissors {
  play(player: Move, opponent: Move): Outcome;
}

export function createRockPaperScissors(): RockPaperScissors {
  const scenarios = new Array(
    { player: Move.Rock, opponent: Move.Scissors, outcome: Outcome.PlayerWins },
    { player: Move.Paper, opponent: Move.Rock, outcome: Outcome.PlayerWins },
    { player: Move.Scissors, opponent: Move.Paper, outcome: Outcome.PlayerWins }
  );
  return {
    play(player: Move, opponent: Move): Outcome {
      if (player === opponent) {
        return Outcome.Tie;
      }

      const scenario = scenarios.find(
        (scenario) =>
          scenario.player === player && scenario.opponent === opponent
      );

      if (scenario) return scenario.outcome;

      return Outcome.PlayerLoses;
    },
  };
}
