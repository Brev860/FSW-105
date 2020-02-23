
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
  itemPrice: [.50,1.25,3.25,2.50,2.99,3.25,2.89]
};


var getShopperName ={
   myFunction: function(){
           return guestShopper.nameFirst + " " + guestShopper.nameLast
    }
}
var getShopperSubtotal = {  
  myFunction: function(){
          return guestShopper.groceryCart[0] +": "+ guestShopper.itemPrice[0]
          
            return guestShopper.groceryCart[1] +": "+ guestShopper.itemPrice[1]
  }
}
console.log(getShopperSubtotal.myFunction());
  








