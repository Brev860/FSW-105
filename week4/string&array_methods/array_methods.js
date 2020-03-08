/* ARRAY METHODS */


/*1. Remove last item   */

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetable = ["carrot", "tomato", "pepper", "lettuce"];

var removeVeggies = vegetable.pop(); 
var removeFruit = fruit.shift();
var arrIndexof = fruit.indexOf("orange");
var addNumFruit = fruit.unshift(1);
var veggieLength = vegetable.length
var addNumVeg = vegetable.unshift(3)
var revVegge = vegetable.reverse()
var fruitSort = fruit.sort()
var revFruit = fruit.reverse()
var food = fruit.concat(vegetable)
var removeFood = food.splice(5,2)
var revFood = food.reverse()
 

function foodString(){ 
return food.toString()
} console.log(foodString())