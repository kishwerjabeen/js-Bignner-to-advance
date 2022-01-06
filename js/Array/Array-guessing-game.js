/* Math.random();
Math.random() * 10;

Math.floor(Math.random() * 10);
Math.floor(Math.random() * 10) + 1; */


var animals = ["cat", "dog", "rabbit", "bird", "fish"];
var randomIndex = Math.floor(Math.random() * animals.length);
// console.log(animals[randomIndex]);
var randomAnimal = animals[randomIndex];
var message = prompt("which index value is " + randomAnimal);
var response = (message == randomIndex) ? "Correct" : "Wrong it was " + randomIndex;
alert(response);

