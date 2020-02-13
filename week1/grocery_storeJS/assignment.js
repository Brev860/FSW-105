
var guestShopper = {

  nameFirst: "John",
  nameLast: "Smith",
  streetName: "Main st.",
  streetNumber: 546,
  city: "Hartford",
  zipeCode: 06016,
  stateProvence: "CT",
  postOfficeBox: false,
  groceryCart: ["apples", "oranges", "milk", "eggs", "butter", "cheese", "bread"],

};


var getShopperName ={
   myFunction: function(){
           return guestShopper.nameFirst + " " + guestShopper.nameLast
    }
}
console.log(getShopperName.myFunction());
  








