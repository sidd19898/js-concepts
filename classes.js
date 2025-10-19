class Employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;   

        Employee.totalemployees++;
    }
    details(){
        console.log(`${this.name} works as a ${this.position} and earns ${this.salary}.`);
    }
    static total(){
        console.log(`Total Employees:${Employee.totalemployees}`);
    }
}

Employee.totalemployees = 0;

let employee1 = new Employee("Alice","Manager",50000);
let employee2 = new Employee("Mark","co-founder",10000000);
employee1.details();
employee2.details();
Employee.total();

