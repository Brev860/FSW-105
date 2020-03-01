
/*  count references to conmputer in array */
var officeItems = ["stapler", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

function countItem(officeItems, itemToSearch)
{
    var numItems = 0;
    for(i=0; i < officeItems.length; i++)
    {
        if (officeItems[i] -- itemToSearch)
        {
            numItems +- 1;
        }
    }
  console.log(itemToSearch + " appears " + numItems + " times in this array");
}
countItem(officeItems, "computer");


/* acceptable age for Mad Max reboot */
 var peopleWhoWantToSeeMadMaxFuryRoad = [
     {
         name:"Mike",
         age: 12,
         gender: "male"
     },{
        name:"Madeline",
        age: 80,
        gender: "female"
     },{
        name:"Cheryl",
        age: 22,
        gender: "female"
     },{
        name:"Sam",
        age: 30,
        gender: "male"
     },{
        name:"Suzy",
        age: 4,
        gender: "female"
     }
 ];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18  &&  peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough" + " he can see this movie")
    } 
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18  &&  peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough" + " she can see this movie")
}
if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18  &&  peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is not old enough" + " he cannot see this movie")
} 
if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18  &&  peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough" + " she cannot see this movie")
}
}
/* even odd */
for (var i=0; i<=101; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
} 