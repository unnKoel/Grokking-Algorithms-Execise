import Queue from "./utils/queue";

const breadthFirstSearch = (graph, criteria) => {
  const queue = new Queue(); // initialize
  const hasSearched = [];
  for (const person of graph["you"]) {
    queue.enqueue(person);
  }

  while (!queue.isEmpty()) {
    // loop
    const person = queue.dequeue();
    if (hasSearched.includes(person)) continue;

    if (criteria(person)) return person;

    if (graph[person].length) {
      for (const nextPerson of graph[person]) {
        queue.enqueue(nextPerson);
      }
    }

    hasSearched.push(person); //  make sure you don’t check them again. Oterwise, you might end up in an infinite loop.
  }

  return false;
};

export { breadthFirstSearch };
