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
	this.input = input;
  }

  minimum() {
    // Write your code here
	var len = this.input.length;
	if(len <= 0){
		return;
	}
	var min = this.input[0];
	for(var x = 1;x < len;x++){
		if(min > this.input[x]){
			min = this.input[x];
		}
	}
	return min;
  }
  maximum(){
	var len = this.input.length;
	if(len <= 0){
		return;
	}
	var max = this.input[0];
	for(var x = 1;x < len;x++){
		if(max < this.input[x]){
			max = this.input[x];
		}
	}
	return max;
  }
  
  size(){
	  return this.input.length;
  }
  
  average(){
	var len = this.input.length;
	if(len <= 0){
		return;
	}
	var aver;
	var sum = 0;
	for(var x = 1;x < len;x++){
		sum += this.input[x];
	}
	return (sum / len).toFixed(2);
  }
}
