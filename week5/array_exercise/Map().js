/* Map function  */////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 1. Double the first array  */

function doubleNumbers(arr)
{
    const results = arr.map(function(num){
        return num * 2;
    })
    return results;
}console.log(doubleNumbers([2, 5, 100]));

/* 2. convert numbers into string  */
function stringItUp(num){
    const results = num.map(function(num){
        return num.toString();
    }) 
    return results;
}console.log(stringItUp([2, 5, 100]));

/*3. Capitalize names  */
function capitalizeNames(name){
    const results = name.map(function(name){
      const firstLetter = name.charAt(0).toUpperCase()
      const restOfString = name.slice(1,).toLowerCase()
     
      
       return firstLetter + restOfString
    })
    return results
}console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

/* 4. Array of strings names */
function namesOnly(arr){
    const results = arr.map(function (arr){
        return arr.name;
    })
    return results;
}console.log(namesOnly([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));
/*5. array of string Matrix */
function makeString(arr){
    const results = arr.map(function(arr){
        if (arr.age >= 18){
            return arr.name + " can go to The Matrix."
        } else {
            return arr.name + " is under age."
        };
    }); return results;
}console.log(makeString([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));
/*6.readyToPutInTheDOM  */
function readyTOPutInDOM(arr){
    const results = arr.map(function(arr){
        return "<h1>" + arr.name + "<h1> " + " <h2>" + arr.age + "<h2>";
    });
    return results
}console.log(readyTOPutInDOM([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));