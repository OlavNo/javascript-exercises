const leapYears = function(year) {
    var leapYear = false;

    const div_four = year % 4 == 0;
    const div_100 = year % 100 == 0;
    const div_400 = year % 400 == 0;

    if (div_four) {
        if (div_100) {
            if (div_400) {
                leapYear = true;
            }
        }
        else {
            leapYear = true;
        }
    }
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
