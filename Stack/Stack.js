class Stack {
  constructor(data) {
    this.data = [data];
    this.length = this.data.length;
    this.top = this.data[this.length - 1];
  }
  push(data) {
    this.data.push(data);
    this.length++;
    this.top = this.data[this.length - 1];
  }
  pop() {
    this.data.pop();
    this.length--;
    this.top = this.data[this.length - 1];
  }
  peak() {
    return this.top;
  }
  lookUp(value) {
    for (let i = 0; i < this.length; i++) {
      if (value === this.data[i]) return i;
    }
  }
}
