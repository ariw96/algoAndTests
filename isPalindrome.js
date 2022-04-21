function isPalindrome(num) {
    let numStr = num.toString();
    let numStrRev = numStr.split('').reverse().join('');
    return numStr === numStrRev;
}
console.log(isPalindrome(-1221111221))
module.exports = isPalindrome;