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





    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
      

    }
    this.data[0] = val;
    this.length++;


    return this.data;



  }

}


module.exports = DynamicArray;
