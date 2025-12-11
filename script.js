function stringChop(str, size) {
  // your code here
	let arr = [];
	let temp = size;
	let j = 0;
	while(true){
		for(let i=j; i < size; i--){
		let chunk += str[i] 
		}
		j += size;
		size += temp;
		arr.push(chunk);
		if(size>str.length){
			break;
		}
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
