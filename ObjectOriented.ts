class  Human {
    name:string = " "
    lastname:string = " "
    age : number = 0

    
    sayHello(){
        return "Hello! I'm "+this.name+" lastname "+this.lastname+" and "+this.age+" year old."
    }
}

const user1 = new Human();
user1.name = "Porameht";
user1.lastname = "Khumsombat";
user1.age = 27;

console.log(user1.sayHello());
