// Задача №10

// Given an array of integers your solution should find the smallest integer
// For example
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// Способ №1

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }


// Способ №2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let currentMin = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < currentMin) currentMin = args[i];
    }
    return currentMin;
  }
}