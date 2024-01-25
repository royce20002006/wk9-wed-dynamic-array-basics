class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    // Your code here 

  }

  read(index) {
    return this.data[index];
    
  }

  unshift(val) {
    let newArr = [val];
    this.length = 1;
    
    for (let i = 0; i < this.capacity; i++) {
      if (this.data[i] !== undefined) {
        newArr[i + 1] = this.data[i];
      this.length++
      }
      
    }
    
    this.data = newArr;
    return this.data;
    
    
    
  }

}


module.exports = DynamicArray;
