function Employee(id,fullname,department,salary){
    this.id=id
    this.fullname=fullname
    this.department=department
    this.salary=salary
}

const employeeDB ={}

function addEmploye(id,fullname,department,salary) {
    const employee = new Employee(id,fullname,department,salary)
    employeeDB[id]=employee   
    console.log("employee with id" +id+"added");    
}

function getAllEmployees() {
    const employees=Object.values(employeeDB)
    console.log("List of employees");
    employees.forEach((employee)=>{
        console.log(`${employee.fullname}, Department: ${employee.department} , salary: ${employee.salary}`);       
    })   
}

function getEmployeeDetail(id) {
    if(employeeDB[id]){
        return Object.entries(employeeDB[id])
    }
    return`employee with id ${id} is not found`
}

function updateEmployee(id,updateDetails) {
     if(employeeDB[id]){
        Object.assign(employeeDB[id],updateDetails)
     }else{
        console.log(`employee with id ${id} is not found`);    
     }
}

function freezeEmployee(id) {
     if(employeeDB[id]){
        Object.freeze(employeeDB[id])
        console.log("Employee DATA freezed");
        
     }else{
        console.log(`employee with id ${id} is not found`);    
     }
}

function sealEmployee(id) {
    if(employeeDB[id]){
        Object.seal(employeeDB[id])
         console.log("Employee DATA Sealed");
     }else{
        console.log(`employee with id ${id} is not found`);    
     }
}

//Usage

addEmploye(1,"Alice","IT" ,8000)
addEmploye(2,"Moahmmed","HR",15000)
addEmploye(3,"Priya","TL",8000)


getAllEmployees();