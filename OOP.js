/* function Person(name,age,location){
    this.name = name;
    this.age = age;
    this.location =location;
}

Person.prototype.sayHello = function() {
    console.log(`Hello! My name is ${this.name}.`)
};

Person.prototype.sayHey = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.location}.`)
} */

class Person{
    constructor(name,age,location){
        this.name = name
        this.age = age
        this.location = location
    }

    sayHello() {
        console.log(`Hello! My name is ${this.name}.`)
    }

    sayHey() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.location}.`)
    }
}

p1 = new Person(`Liam`,`4`,`Moody`);
p1.sayHello();
p1.sayHey();

p2 = new Person(`Chase`,`27`,`Moody`);
p2.sayHello();
p2.sayHey();

p3 = new Person(`Brie`,`26`,`Oxford`);
p3.sayHello();
p3.sayHey();

p4 = new Person(`Tanner`,`19`,`Trussville`);
p4.sayHello();
p4.sayHey();

p5 = new Person(`Anna`,`29`,`Moody`);
p5.sayHello();
p5.sayHey();
