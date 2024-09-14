function replaceRepeatingChars(input) {
    let newArr = []
for (let i=0; i<input.length; i++){
    if (input[i]!==input[i+1]){
        newArr.push(input[i])
    }
}
console.log(newArr.join(``));
// let newString =Array.from(input);
// for (let char of newString){
//     if (!newArr.includes(char)){
//         newArr.push(char)
//     }
// }



}
replaceRepeatingChars('qqqwerqwecccwd');
