function replaceRepeatingChars(input) {
    let newArr = []
for (let i=0; i<input.length; i++){
    if (input[i]!==input[i+1]){
        newArr.push(input[i])
    }
}
console.log(newArr.join(``));
}
replaceRepeatingChars('qqqwerqwecccwd');
