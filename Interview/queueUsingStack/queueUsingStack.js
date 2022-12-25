class queue {
    constructor(){
      this.s1 =[];
      this.s2=[]
    }
    push(x){
      this.s1.push(x)
    }
    pop(){
      if(this.s2.length ===0){
        while (this.s1.length >0) {
          this.s2.push(this.s1.pop())
        }
  
      }
      if(this.s2.length > 0){
        return this.s2.pop()
      }
      throw new Error("Queue is Empity")
    }
    front() {
      // O(1) time complexity
      if (this.S2.length === 0) {
        while (this.S1.length > 0) {
          this.S2.push(this.S1.pop());
        }
      }
      if (this.S2.length > 0) {
        return this.S2[this.S2.length - 1];
      }
      throw new Error("Queue is empty");
    }
  }