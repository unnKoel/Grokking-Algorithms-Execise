// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue class using linked list
export default class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add item to the end
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  // Remove item from the front
  dequeue() {
    if (this.isEmpty()) return null;

    const removedValue = this.front.value;
    this.front = this.front.next;

    if (!this.front) this.rear = null; // Queue is now empty
    this.length--;

    return removedValue;
  }

  // Peek at the front item
  peek() {
    return this.front ? this.front.value : null;
  }

  // Check if empty
  isEmpty() {
    return this.length === 0;
  }

  // Get size
  size() {
    return this.length;
  }

  // Print queue
  print() {
    let current = this.front;
    let result = "";
    while (current) {
      result += current.value + " <- ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
