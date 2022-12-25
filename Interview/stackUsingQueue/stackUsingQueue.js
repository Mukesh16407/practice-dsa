class Stack {
    constructor() {
      this.Q1 = [];
      this.Q2 = [];
    }
  
    push(x) {
      // O(N) time complexity
      this.Q1.push(x);
    }
  
    pop() {
      // O(1) time complexity
      if (this.Q1.length === 0) {
        throw new Error("Stack is empty");
      }
      while (this.Q1.length > 1) {
        this.Q2.push(this.Q1.shift());
      }
      const result = this.Q1.shift();
      while (this.Q2.length > 0) {
        this.Q1.push(this.Q2.shift());
      }
      return result;
    }
  
    top() {
      // O(1) time complexity
      if (this.Q1.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.Q1[this.Q1.length - 1];
    }
  }
  