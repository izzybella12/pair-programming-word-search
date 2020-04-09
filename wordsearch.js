const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let verticalJoin;
    let result = false;
    for (let array = 0; array < horizontalJoin.length; array++) {
        if (horizontalJoin[array].includes(word)) {
            result = true;
        }
    }
    for (let firstArray = 0; firstArray < letters.length; firstArray++) {
        for (let secondArray = 0; secondArray < letters[firstArray].length; secondArray++) {
            if(letters[secondArray][firstArray] !== undefined) {
                verticalJoin += letters[secondArray][firstArray];
                if(verticalJoin.includes(word)) {
                    result = true;
                }
            }
        }
    }
    return result;
}


const result = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ] 
  
  console.log(wordSearch(result, 'FNFT'));


module.exports = wordSearch