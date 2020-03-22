/*1. Return 5 of greater */////////////////////////////////////////////////////////////////////////////////////////
let arrNum = [3, 6, 8, 2];

function fiveOrGreater(arr)
{

    const results = arrNum.filter(function(num)
{
 if (num >= 5)
 {

 return true;
 }
});
    return results;

}
console.log(fiveOrGreater())

/*2.Return even numbers */
function evenNum(arr)
{
    const results = arrNum.filter(function(num)
    {
        if (num % 2 == 0 )
        {
            return true;
        }
    })
    return results;
}console.log(evenNum())
/* 3. str length 5 or less */
let characters = ["dog", "wolf", "by", "family", "eaten"];

function fiveCharLength(arr)
{
    const results = characters.filter(function(arr)
    {
        if(arr.length <= 5)
        {
            return true;
        }
    })
    return results;
}console.log(fiveCharLength())

/* 4. Filter those who don't belong */

const people = [
    {name: "Angelina Jolie", member: true},
    {name:"Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kanye West", member: false},
    {name: "Bob Ziroll", member: true}
];
const results = people.filter(people => people.member === true )

console.log(results);

/*5. Old enough to see The Matrix  */

function ofAge(arr){
    const results = arr.filter(arr =>{
        if (arr.age >= 18){
         return arr.name + arr.age
        }
    })
    return results
} console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
])); 