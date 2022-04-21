const longestPreFix = function longPreFix(arrayOfStrings) {
    let objectOfLongestWord = {}

    let longestPreFix = ""
    let longestWord = arrayOfStrings.reduce((longestWord, word) => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
        return longestWord
    }, )
    for (let i = 0; i < arrayOfStrings.length; i++) {
        objectOfLongestWord[i] = longestWord[i]
    }
    for (let i = 0; i < arrayOfStrings.length; i++) {
        for (let j = 0; j < arrayOfStrings[i].length; j++) {
            if (objectOfLongestWord[j] === arrayOfStrings[i][j]) {
                longestPreFix += arrayOfStrings[i][j]
            } else {
                return [longestPreFix, objectOfLongestWord]
            }
        }
        longestPreFix = ""
    }

    return objectOfLongestWord
}
console.log(longestPreFix(["Your", "YoodDay", "YourWelcome", "hetllog", "hamburger"]))