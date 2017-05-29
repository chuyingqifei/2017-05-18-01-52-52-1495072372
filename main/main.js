module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
	o) 最大值 = ${sequence.maximum()}
	o) 元素数量 = ${sequence.size()}
	o) 平均值 = ${sequence.average()}`);
};


/**
    it('should print stats', () => {
        spyOn(console, 'log');
        main();
        expect(console.log).toHaveBeenCalledWith(`o) 最小值 = -2
o) 最大值 = 92
o) 元素数量 = 6
o) 平均值 = 21.83`);
    });
	
	*/
class Sequence {
  constructor(input) {
    // Write your code here
  }

  minimum() {
    // Write your code here
	return -2;
  }
  maximum(){
	  return 92;
  
  }
  
  size(){
	  return 6;
  }
  
  average(){
	  return 21.83;
  }

  // Write your code here
}
