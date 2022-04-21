/* Sorting an array without a comparator function converts all array elements
to a string and then sorts them in lexical order
Passing a comparator function that calculates a-b enables correctly sorting*/
const sortedArray = (array) => array.sort((a, b) => a - b);

console.log(sortedArray([8, 2, 9, 3, 5]));
