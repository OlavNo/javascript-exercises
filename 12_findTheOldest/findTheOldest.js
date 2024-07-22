
const findTheOldest = function(people) {
    

    var oldestPerson = people.map((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return {
            name: person.name,
            age: person.yearOfDeath - person.yearOfBirth,
        }
    })
    .reduce((current, next) => {
        if (next.age > current.age) return next;
        else return current;
    });
    console.log(oldestPerson.age);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
