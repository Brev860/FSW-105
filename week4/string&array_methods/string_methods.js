/* 1. Uppercase/Lowercase string */
var name = "Gillbert"
function uppercaseString(){
    return name.toUpperCase() + " " + name.toLowerCase()
}
console.log(uppercaseString())

/* 2. Half index rounded down */

var place = "New Orleans";
var lengthOfPlace = place.length;

var cutLength  = function lengthHalved(){
    return lengthOfPlace / 2
};
function roundedLength(){
    return Math.floor(cutLength())
}
 
console.log(roundedLength()) 

/* 3. Return the first half of a string */

function sliceString() {
    return name.toUpperCase().slice(null,4)
}console.log(sliceString())

/* 4. Half Upper half lower func */
function upperLowerStr() {
    return name.toUpperCase().slice(0, 4) + name.toLowerCase().slice(4, 8)
}console.log(upperLowerStr())



