class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);


  }

  read(index) {
    return this.data[index];

  }

  unshift(val) {





    for (let i = this.capacity - 1; i >= 0; i--) {
      


      if (this.data[i] !== undefined) {
        this.data[i + 1] = this.data[i];
        
        console.log(this.data)
      }

    }
    this.data[0] = val;
    this.length++;


    return this.data;



  }

}


module.exports = DynamicArray;
