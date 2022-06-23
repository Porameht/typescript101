class Person {
    name: string = "";
    constructor(name:string) {
        this.name = name;
        
    }
    sayHi(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

// const person = new Person("frank");
// person.sayHi();

class Employee extends Person{
    salary:number = 0;
    constructor(name:string, salary:number){
        super(name);
        this.salary = salary;

    }

    sayHi(){
        super.sayHi();
        console.log(`Saraly: ${this.salary}`)
    }
}


const employee = new Employee("Film",18700);
employee.sayHi()
