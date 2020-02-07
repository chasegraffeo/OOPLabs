/* function Person(name,age,location){ //this is just a longer version of whats below
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



class Vehicle {
    constructor(type, manfac, numwhls) {
        this.type = type;
        this.manfac = manfac;
        this.numwhls = numwhls;
    }
    aboutVehicle() {
        console.log(`I am a ${this.type}, ${this.manfac} is my manufacturer, this is my number of wheels ${this.numwhls}.`)
    }
}

class Truck extends Vehicle {
    constructor(type, manfac, numwhls, doors, truckBed) {
        super(type, manfac, numwhls);
        this.doors = doors;
        this.truckBed = truckBed;
    }
    moreTruck() {
        console.log(`I have ${this.doors} doors and ${this.truckBed} truckbed.`)
    }
}

class Sedans extends Vehicle {
    constructor(type, manfac, numwhls, size, mpg) {
        super(type, manfac, numwhls);
        this.size = size;
        this.mpg = mpg;
    }
    moreSedans() {
        console.log(`I am ${this.size} and I get ${this.mpg} mpg.`)
    }
}

class Motorcycles extends Vehicle {
    constructor(type, manfac, numwhls, bars, ndoors) {
        super(type, manfac, numwhls);
        this.bars = bars;
        this.ndoors = ndoors;
    }
    moreMotor() {
        console.log(`I have ${this.bars} and ${this.ndoors}`)
    }
}

v1 = new Truck(`Colorado`, `Chevy`, `4`, `2`, `1`);
v1.aboutVehicle();
v1.moreTruck();

v2 = new Sedans(`Galant`, `Mitsubishi`, `4`, `small`, `33`);
v2.aboutVehicle();
v2.moreSedans();

v3 = new Motorcycles(`BSA`, `British Service & Arms`, `2`, `handlebars`, `no doors`);
v3.aboutVehicle();
v3.moreMotor();