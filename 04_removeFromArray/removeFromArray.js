const removeFromArray = function(array, ...args) {
    newArray = array;

    for (const arg of args) {
        for (var i = 0; i < newArray.length; i++) {
            var elem = newArray[i];
            if (elem === arg) {
                const index = newArray.indexOf(elem);
                newArray.splice(index, 1);
                i--;
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
