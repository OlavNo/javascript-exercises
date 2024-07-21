const palindromes = function (str) {
    str = str.replace(/\s/g, ''); // remove spaces
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // remove punctuation
    str = str.toLowerCase(); 

    var isPalindrome = true;
    for (var i = 0; i < str.length/2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - (i + 1))) {
            console.log("first " + str.charAt(i) + "\nlast " + str.charAt(str.length - (i + 1)));
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
