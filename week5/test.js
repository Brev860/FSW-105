 
    let firstName = "Jane";
    let lastName =   "Doe";
    let personAge = 100
    function printString(person){
        const personID =[]
    
        for (let i = 0; i < person.length; i++){
          let her = {type: person[i]}
          firstName;
          if (person[i] === "wrong first name") {
        firstName = "Jane"
    } if (person[i] === "wrong last name" ) {
        lastName = "Stark";
        personAge = 40
    } 
       console.log("Hi ", firstName + " " + lastName, " how does it feel to be", personAge)
       her.name = personID 
       personID.push(her)
    }
    
    return personID
    }
    printString(["wrong first name","wrong last name"]);
    
