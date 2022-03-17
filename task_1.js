longestWord('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers')
function longestWord(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}
