import { add } from "../src/utils";

it("should add two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

it("should add two numbers together", () => {
  expect(add(6, 10)).toBe(16);
});
