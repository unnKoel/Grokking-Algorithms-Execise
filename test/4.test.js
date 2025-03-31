import { sum, count, max } from "../src/4";

test("D&Q sum check", () => {
  expect(sum([])).toBe(0);
  expect(sum([3])).toBe(3);
  expect(sum([2, 3])).toBe(5);
  expect(sum([2, 3, 6, 7])).toBe(18);
});

test("D&Q count check", () => {
  expect(count([])).toBe(0);
  expect(count([3])).toBe(1);
  expect(count([2, 3])).toBe(2);
  expect(count([2, 3, 6, 7])).toBe(4);
});

test("D&Q count max", () => {
  expect(max([3])).toBe(3);
  expect(max([2, 3])).toBe(3);
  expect(max([2, 3, 6, 7])).toBe(7);
});
