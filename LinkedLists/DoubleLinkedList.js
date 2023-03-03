"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
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
      this.head.next = currentHead;
      currentHead.prev = this.head;
    }
    this.length++;
  }
  append(node) {
    if (this.length === 0) {
      preppend(node);
    } else {
      const currentTail = this.tail;
      this.tail.next = node;
      this.tail = node;
      node.prev = currentTail;
    }
    this.length++;
  }
  lookUp(value) {
    let currentNode = this.head;
    let nodeCounter = 0;
    while (nodeCounter < this.length) {
      if (currentNode.data === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
      nodeCounter++;
    }
  }
  reverse(value) {
    let currentNode = this.tail;
    let nodeCounter = this.length;
    while (nodeCounter > 0) {
      if (currentNode.data === value) {
        return currentNode;
      }
      currentNode = currentNode.prev;
      nodeCounter--;
    }
  }
  insertAfter(nodeToInsert, valueOfNode) {
    const myCurrentNode = this.lookUp(valueOfNode);
    const myCurrentNext = myCurrentNode.next;
    myCurrentNode.next = nodeToInsert;
    myCurrentNext.prev = nodeToInsert;
    nodeToInsert.prev = myCurrentNode;
    nodeToInsert.next = myCurrentNext;
    this.length++;
  }
  delete(valueToDelete) {
    const nodeToDelete = this.lookUp(valueToDelete);
    const nextNode = nodeToDelete.next;
    const prevNode = nodeToDelete.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }
}
