let name = "John"
const age = 101

console.log("man name: ", name)

function runForLoop(pets){
    const petObjects =[]

    for (let i = 0; i < pets.length; i++){
      let pet = {type: pets[i]}
      name;
      if (pets[i] === "cat") {
    name = "fluffy"
}  else{
    name = "spot"
} 
   console.log("pet name: ", name)
   pet.name = name 
   petObjects.push(pet)
}

return petObjects
}
runForLoop(["cat","dog"]);
/*2.  */
const carrots = ["bright orange", "ripe", "rotten"]


 mapVegetables = carrots.map((carrot) => {
    return {type: "carrot", name:carrot}
});
 
    

/* 3. arrow function */
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
        },
        {
            name: "Mario",
            friendly: "false"
        },
        {
            name: "Boswer",
            friendly: false
        }
]


  lterForFriendly = people.filter((person) => {
      return person.friendly;
  });
/*4. arrow function */

let doMathSum = (a, b) => a + b;
console.log(doMathSum(1, 3))

let doMathMul = (a, b) => a * b;
console.log(doMathMul(2, 4))

/*5.  */
 
 
let firstName = "Jane";
let lastName =   "Doe";
let personAge = 100
function printString(first = firstName, last = lastName, age = personAge){
     console.log(` Hi ${first} ${last}, how does it feel to be ${age}`);

}
printString()



/*6. literals */
let fName = "Jane";
let lName =   "Doe";
let pAge = 100
function printString(first = fName, last = lName, age = pAge){
     console.log(` Hi ${first} ${last}, how does it feel to be ${age}`)

}
printString("Kat", "Stark", 40)


// 7. shorthand

const animals = [
     {type: "dog", name:"theodore"},
     {type: "cat", name:"whiskers"},
     {type: "pig", name:"piglette"},
     {type: "dog", name:"sparky"}
];

  var filterFOrDOgs = (animal.type === 'dog') ? true :false;
 
// 8. Template literals 

let guestName = "John" 
let location = "USA"
function printMessage(guest = guestName, place = location ){
     console.log(` Hi ${guest} , \n \n Welcome to ${place} \n \n I hope you are enjoying your stay. Please ask the president of ${place} if you need anything `)

}
printMessage("Janice", "Hawaii")