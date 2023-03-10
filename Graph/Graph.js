"use strict";

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }
  printGraph() {
    const get_keys = this.AdjList.keys();
    for (let i of get_keys) {
      const get_values = this.AdjList.get(i);
      let conc = "";
      for (let j of get_values) conc += j + " ";
      console.log(i + " -> " + conc);
    }
  }
}
