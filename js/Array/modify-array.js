/* var animals = ["cat", "dog", "bird", "fish"];
animals.push("sheep"); // add item at the end of an array
var remove = animals.pop(); // remove at he end


console.log(remove);
console.log(animals);


animals.shift()//remove first item

animals.unshift("horse") // add at the start
console.log(animals);

animals.splice(2, 1); // remover form postion numer of the items
console.log(animals);
animals.splice(2, 2);
console.log(animals);

animals.reverse(); // revers the ordr of the item
animals.sort(); // sort items by value
console.log(animals); */


var animals = ["cat", "dog", "rabit", "fish", "eagle"];
/* /* animals.sort();
animals.reverse(); 

animals.sort().reverse(); */
var startVal = animals.length
animals[20] = "horse";
//animals.fill("mouse", 6, (animals.length - 1));
animals.fill("mouse", startVal, (animals.length - 1));
console.log(animals);