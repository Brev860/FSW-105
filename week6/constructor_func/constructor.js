const employees = []

function empolyee (name, title, salary, status) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log(this.name ;
    
};

let bob = new empolyee("Bob", "engineer", 80,000);
bob.printEmployeeForm()
// let jim = new empolyee("jim", "customer service", 30,000)
// console.log(bob.printEmployeeForm())
// let tom = new empolyee("tim", "project manager", 120,000)
// console.log(bob.printEmployeeForm())
// let don = new empolyee("don", "auditor", 60,000)
// console.log(bob.printEmployeeForm())
// let mac = new empolyee("mac", "manager", 900,000)
// console.log(bob.printEmployeeForm())
// console.log(printEmployeeForm())

}
