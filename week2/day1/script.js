let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift ();

console.log(fruits);

fruits.sort (); 

console.log (fruits);

fruits.push ("kiwi");

console.log (fruits);

var removed = fruits.splice (1);

removed.reverse (); 

console.log(removed);

var moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log (moreFruits[1][1][0]);