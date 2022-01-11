var newHolder = ["cat", "dog", "rabit", "bird"];
// var posIndex = newHolder.indexOf("cat");

/* var q = prompt("what did you want to look for?");
var p = newHolder.indexOf(q);

var message = p > -1 ? "Found" : "not there";

console.log(message); */

// Concatinate
/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); */
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// Concatenating three arrays

/* const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers); */
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* 
// Slice 
var sli = newHolder.slice(0, 3);

console.log(sli); */


var arr = [3, 4, 10, 5, 22, 6, 7, 17, 8, 9, "cat", "Dog"];
arr.sort();

console.log(arr);
var q = prompt("what do you want to remove");

var finder = arr.indexOf(q);

/* var remover = arr.splice(finder, 1);

console.log(remover);
console.log(arr);
 */

var v = (finder > -1) ? arr.splice(finder, 1) : false;
console.log(v);

console.log(arr);

