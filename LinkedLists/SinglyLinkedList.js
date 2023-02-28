"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  preppend(node) {
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
  append(node) {
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
  getIndex(valueOfNode) {
    let myCurrentNode = this.head;
    let nodeCounter = 0;
    while (nodeCounter < this.length) {
      if (myCurrentNode.data === valueOfNode) return nodeCounter;
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
  insertAfter(valueOfNode, nodeToInsert) {
    const myCurrentNode = this.lookUp(valueOfNode);
    const currentNext = myCurrentNode.next;
    myCurrentNode.next = nodeToInsert;
    nodeToInsert.next = currentNext;
    this.length++;
  }
  delete(valueToDelete) {
    const myCurrentNode = this.lookUp(valueToDelete);
    const myCurrentIndex = this.getIndex(valueToDelete);
    const previousNode = this.lookAtIndex(myCurrentIndex - 1);
    previousNode.next = myCurrentNode.next;
    this.length--;
  }
}
