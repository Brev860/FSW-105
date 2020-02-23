

 if(5>3){
    console.log("Is greater than")
}

 if("cat" == 3) {
    console.log("Is the length")
 }else{
      console.log("nah son")
   
}


var person = {
    name: "Bobbby",
    age: 19,
}

if(person.name.startsWith("B")) {
    console.log("can go to the moves")
}

if(person.age > 18) {
    console.log("can go to movies")
} else{
    console.log("cant go into movies")
}

if(person.name.startsWith("B") || person.age > 18) {
    console.log("can go to movie")
} else{
    console.log("can't go to movie")
}

if(1 === "1"){
    console.log("strict")
} else{
    console.log("loose")
}
if(1 <= 2 && 2 === 4){
    console.log("yes")
} else {
    console.log("no")
}