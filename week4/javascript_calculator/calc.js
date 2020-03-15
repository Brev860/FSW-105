const readlineSync = require("readline-sync")
function addNum1Num2(num1, num2)
{
    return "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);

}
function subNum1Num2(num1, num2)
{
   return num1 + " subtracted from " + num2 +" equals " + (num1 - num2);
}

function multNum1Num2(num1, num2)
{
   return num1 + " multiplied by " + num2 + " equals " +  (num1 * num2);
}

function divNum1Num2(num1, num2)
{
   return num1 + " divided by " + num2 +" equals " + (num1 % num2);
}
var num1 = readlineSync.questionInt("Please enter first numer");
var num2 = readlineSync.questionInt("Please enter second numer");
var chooseOperator = readlineSync.questionInt("Please choose the Operation to perform: add, sub, mul, div");
 
if (chooseOperator = "add"){
    console.log(addNum1Num2(num1, num2));
}if (chooseOperator = "sub") {
    console.log(subNum1Num2(num1, num2));
} 
if (chooseOperator = "mul") {
        console.log(multNum1Num2(num2, num2));
 }
if (chooseOperator = "div") {
            console.log(divNum1Num2(num1, num2))
}

