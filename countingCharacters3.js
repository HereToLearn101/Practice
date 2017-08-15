function countingCharacters3(str, search) {
    var count = 0;
    var numChars = search.length; // 2

    var lastIndex = str.length - numChars; // 6
    for (var index = 0; index <= lastIndex; index++) {
        // (0,2). 0 is where it starts, and 2 is where it ends. Know that position 2 will not be included.
        var current = str.substring(index, index + numChars);
        if (current == search) {
            count++;
        }
    }

    return count;
}