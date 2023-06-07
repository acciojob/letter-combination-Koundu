var mapOfNumbers = {
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(input_digit) {
  //Complete the function
	if(!input_digit.length){
		return [];
	}

	let lastDigitPossibilities = [''];
	for(let i=0;i<input_digit.length;i++){
		let newPossibilites = [];
	}

	for(let x=0; x<lastDigitPossibilities.length;x++){
		for(let letter of mapOfNumbers[digits[i]]){
			newPossibilites.push(lastDigitPossibilities[x].concat(letter));
		}
	}

	if(i == input_digit.length -1 ){
		return newPossibilites;
	}
	lastDigitPossibilities = newPossibilities;
	return lastDigitPossibilities;
}

module.exports = letterCombinations;
