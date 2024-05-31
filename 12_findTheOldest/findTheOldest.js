const findTheOldest = function (people) {
  const oldest = people.sort(function (a, b) {
    if (a.yearOfDeath === undefined) {
      const lastGuy = new Date().getFullYear() - a.yearOfBirth;
      const nextGuy = b.yearOfDeath - b.yearOfBirth;
      return lastGuy > nextGuy ? 1 : -1;
    } else if (b.yearOfDeath === undefined) {
      const lastGuy = a.yearOfDeath - a.yearOfBirth;
      const nextGuy = new Date().getFullYear() - b.yearOfBirth;
      return lastGuy > nextGuy ? 1 : -1;
    } else {
      const lastGuy = a.yearOfDeath - a.yearOfBirth;
      const nextGuy = b.yearOfDeath - b.yearOfBirth;
      return lastGuy > nextGuy ? 1 : -1;
    }
  });
  return Object.assign(...oldest.slice(-1));
};

// Do not edit below this line
module.exports = findTheOldest;
