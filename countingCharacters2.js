function countingCharacters2(stringToCount, characterToFind) {
    var count = 0;
    for (var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
        if (stringToCount[characterPosition] == characterToFind) {
            count++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character find: " + characterToFind);
    console.log("Number of times the character appears in the string: " + count);
}