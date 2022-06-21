const findTheOldest = function(persons) {

    const ordered = persons.sort(function(a, b){
        const currentYear = 2022;
        let deathA = (a.yearOfDeath == undefined ? currentYear : a.yearOfDeath);
        let deathB = (b.yearOfDeath == undefined ? currentYear : b.yearOfDeath);

        let yearsLivedA = deathA - a.yearOfBirth;
        let yearsLivedB = deathB - b.yearOfBirth;
        return (yearsLivedA < yearsLivedB ? 1 : -1);
    })

    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
