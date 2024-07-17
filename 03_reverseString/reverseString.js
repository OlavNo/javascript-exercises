const reverseString = function(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        newString += string.charAt(string.length - (1 + i));
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
