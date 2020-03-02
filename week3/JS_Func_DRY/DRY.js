/* sum or 2 num */
function returnSum(num1, num2){
    return num1 + num2;
}console.log(returnSum(8,4));

/* largest of 3 num*/

function largestOfNum(num1, num2, num3){

}

function largest(a, b, c, d) {
    return Math.max.apply(null, [a, b, c, d]);
  }
  console.log(largest(15, 35, 20, 8));

  /* Even or Odd */

  function evenOrOdd(a){
      if(a % 2 == 0) {
          return "is even";
      } else {
          return "is odd";
      }
  } console.log(evenOrOdd(5))


   /* string lenght  */ 

   function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    if(n > 20); {
      return str.substr(null, 6);
    }
     
   }console.log(myFunction())
     