/** 테스트 블록 또는 테스트 집합을 만드는 방법 */
import { greeter } from "./6";

describe("6", () => {
  describe("helloPerson", () => {
    describe("empty name", () => {
      it.only("should return `Hello !`", () => {
        /** Arrange */
        const expected = "Hello !";
        const input = "";
        let _gt = greeter();
        /** Act */
        const result = _gt.helloPerson(input);
        /** Assert */
        expect(result).toBe(expected);
      });
    });

    it("helloPerson given name should return `Hello Peter!`", () => {
      /** Arrange */
      const expected = "Hello Peter!";
      const input = "Peter";
      let _gt = greeter();
      /** Act */
      const result = _gt.helloPerson(input);
      /** Assert */
      expect(result).toBe(expected);
    });
  });
  describe("Hello world", () => {
    it("helloWorld given default should return `Hello world`", () => {
      /** Arrange */
      const expected = "Hello world";
      let _gt = greeter();
      /** Act */
      const result = _gt.helloWorld();
      /** Assert */
      expect(result).toBe(expected);
    });
  });
});
