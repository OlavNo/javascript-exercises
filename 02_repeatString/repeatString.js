const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    totalString = "";
    for (var i = 0; i < num; i++) {
        totalString += string;
    }
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
