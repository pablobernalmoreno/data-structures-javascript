"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  Enqueue(node) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const currentHead = this.head;
      this.head = node;
      node.next = currentHead;
    }
    this.length++;
  }
  Queue(node) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  lookUp(value) {
    let myCurrentNode = this.head;
    let nodeCounter = 0;
    while (nodeCounter < this.length) {
      if (myCurrentNode.data === value) return myCurrentNode;
      myCurrentNode = myCurrentNode.next;
      nodeCounter++;
    }
  }
  lookAtIndex(index) {
    let myCurrentNode = this.head;
    let nodeCounter = 0;
    while (nodeCounter < this.length) {
      if (nodeCounter === index) return myCurrentNode;
      myCurrentNode = myCurrentNode.next;
      nodeCounter++;
    }
  }
  peak() {
    return this.lookAtIndex(this.length);
  }
}
