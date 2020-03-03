

var x = 5
var y = 3

function greaterThan(){
    if(x>y){
        return "Is greater than"
    }
}
  
    console.log(greaterThan())


function returnLength(){
var x = "cat"
    if(x.length == 2){   

        return "length is 2 characters long"
 }else{
     return "3 is the length"
 } 
}  console.log(returnLength());



var person = {
    name: "Bobbby",
    age: 12,
}

function firstInitial(){

if(person.name.startsWith("B")) {
    return "can go to the movies"
}else {
    return "cant go to the movies"
}
}console.log(firstInitial())

var person = {
    name: "Bobbby",
    age: 12,
}
function ageRestriction(){
if(person.age >= 18) {
    return person.name + " is old enough for the movie"
} else{
    return person.name + " is too young to attend movie"
}
}console.log(ageRestriction())

function agePlusName(){
if(person.name.startsWith("B") && person.age >= 18) {
     return person.name + " can attend this movie"
} else{
    return person.name + " cant attend this movie"
}
}console.log(agePlusName())

function compareNum(){
if(1 === "1"){
    return "strictly"
} else{
    return "loose"
}
} console.log(compareNum())

function compareNum2(){
if(1 <= 2 && 2 === 4){
    return "yes"
} else {
    return "no"
}
}console.log(compareNum2())