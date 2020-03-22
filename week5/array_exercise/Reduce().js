/* .reduce()  *///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*1. Total of all numbers */
function total(arr){
    const results = arr.reduce(function (final, num){
       final = final + num;
       return final;
       
    })
    return results;
}
console.log(total([1, 2, 3]));
/*2. TUrn Array of numbers into one string */

function stringConcat(arr){
    const results = arr.reduce(function(num){
      return arr.join("");
    })
    return results;
} console.log(stringConcat([1, 2, 3]));

/*3. Count of Voters */ 

function totalVotes(arr) {
    var newArr = voters.reduce(function(x, y) {
      return x + y.voted;
    }, 0);
    return newArr;
}
var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}

];
console.log(totalVotes());

/*4. Wishlist total */
var wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "fancy hacky Sack", price: 5},
    {title: "Gold fidget spinner", price: 2000},
    {title: "A second Tesla Model S", price: 90000}
]

var shoppingSpree = wishlist.reduce(function(prev, cur) {
    return prev + cur.price;
  }, 0);
   console.log(shoppingSpree);


/*5.Flatten array  */
function flatten(arr){
    const results = array.reduce(function(arr) {
       return  array.flat();
    })
    return results;
}
const array = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]

];
console.log(flatten());
/*6.   */
const newVoters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
    ];
    
    function voterResults(arr)
    {
    const result = arr.reduce(function(final, voter){
    if (newVoters.age >= 18 && newVoters.age <= 25)
    {
    final.youth++;
    if (newVoters.voted == true)
    {
    final.youngVotes++;
    }
    else if (newVoters.age >= 26 && newVoters.age <= 35)
    {
        final.midAge++;
        if (newVoters.voted == true)
    {
        final.midAgeVoter++;
    }
    else if (newVoters.age >= 36 && newVoters.age <= 55 )
    {
     final.older++;
     if(newVoters.voted == true)
    {
    return final.olderVotes++;
    }
    
}}}
    return final;
}, { youngVotes: 0, youth: 0, midAgeVotes: 0, midAge: 0, olderVotes: 0, older: 0}) ;
    return result;
    }
    console.log(voterResults(newVoters));
