import { breadthFirstSearch } from "../src/6";

test("Breadth First Search", () => {
  const graph = {};
  graph["you"] = ["alice", "bob", "claire"];
  graph["bob"] = ["anuj", "peggy"];
  graph["alice"] = ["peggy"];
  graph["claire"] = ["thom", "jonny"];
  graph["anuj"] = [];
  graph["peggy"] = [];
  graph["thom"] = [];
  graph["jonny"] = [];

  const whoIsSeller = (name) => {
    return name[name.length - 1] === "m";
  };

  expect(breadthFirstSearch(graph, whoIsSeller)).toBe("thom");

  expect(breadthFirstSearch(graph, (name) => name[0] === "x")).toBe(false);
});
