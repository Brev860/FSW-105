const employees = []

function empolyee (name, title, salary, status) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.form = function printEmployeeForm(){
            return this;
        };
    employees.push(this) 
    
}

let bob = new empolyee("Bob", "engineer", 80,000)
let jim = new empolyee("jim", "customer service", 30,000)
let tom = new empolyee("tim", "project manager", 120,000)
let don = new empolyee("don", "auditor", 60,000)
let mac = new empolyee("mac", "manager", 900,000)

console.log(employees)


