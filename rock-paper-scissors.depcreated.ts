/**
 * !! Reminder
 * The 3 Laws of TDD:
 *  1. 단위 테스트에 실패하는 경우를 통과하지 않는 이상 Production Code를 작성할 수 없다.
 *     - 작성된 프로덕션 코드는 단위 테스트를 통과한 코드만을 말하게 됩니다.
 *  2. 컴파일이 실패하지 않으면서, 필요한 만큼의 테스트 코드만 작성한다.
 *  3. 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다.
 *  Red => Green => Reflect => Refactor
 *  Fake It Green Bar Pattern
 */

import { Outcome, createRockPaperScissors } from "./rock-paper-scissors";
import { Move } from "./rock-paper-scissors";

describe("가위바위보 게임", () => {
  describe("play game", () => {
    describe(`${Move.Paper} beats ${Move.Rock}`, () => {
      it(`플레이어가 ${Move.Paper}를 내고, 상대편이 ${Move.Rock}를 내면 ${Move.Paper}를 낸 플레이어가 이긴다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Paper;
        const opponent = Move.Rock;
        const expected = Outcome.PlayerWins;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });

      it(`플레이어가 ${Move.Rock}를 내고, 상대편이 ${Move.Paper}를 내면 ${Move.Rock}를 낸 플레이어가 진다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Rock;
        const opponent = Move.Paper;
        const expected = Outcome.PlayerLoses;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });
    });

    describe(`${Move.Scissors} beats ${Move.Paper}`, () => {
      it(`플레이어가 ${Move.Scissors}를 내고, 상대편이 ${Move.Paper}를 내면 ${Move.Scissors}를 낸 플레이어가 이긴다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Scissors;
        const opponent = Move.Paper;
        const expected = Outcome.PlayerWins;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });

      it(`플레이어가 ${Move.Paper}를 내고, 상대편이 ${Move.Scissors}를 내면 ${Move.Paper}를 낸 플레이어가 진다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Paper;
        const opponent = Move.Scissors;
        const expected = Outcome.PlayerLoses;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });
    });

    describe(`${Move.Rock} beats ${Move.Scissors}`, () => {
      it(`플레이어가 ${Move.Rock}를 내고, 상대편이 ${Move.Scissors}를 내면 ${Move.Rock}를 낸 플레이어가 이긴다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Rock;
        const opponent = Move.Scissors;
        const expected = Outcome.PlayerWins;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });

      it(`플레이어가 ${Move.Scissors}를 내고, 상대편이 ${Move.Rock}를 내면 ${Move.Scissors}를 낸 플레이어가 진다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Scissors;
        const opponent = Move.Rock;
        const expected = Outcome.PlayerLoses;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });
    });

    describe("Tie", () => {

      it(`플레이어가 ${Move.Paper}를 내고, 상대편이 ${Move.Paper}를 내면 비긴다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Paper;
        const opponent = Move.Paper;
        const expected = Outcome.Tie;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });

      it(`플레이어가 ${Move.Rock}를 내고, 상대편이 ${Move.Rock}를 내면 비긴다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Rock;
        const opponent = Move.Rock;
        const expected = Outcome.Tie;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });

      it(`플레이어가 ${Move.Scissors}를 내고, 상대편이 ${Move.Scissors}를 내면 비긴다.`, () => {
        const sut = createRockPaperScissors();
        const player = Move.Scissors;
        const opponent = Move.Scissors;
        const expected = Outcome.Tie;

        const actual = sut.play(player, opponent);

        expect(actual).toBe(expected);
      });

    });
  });
});
