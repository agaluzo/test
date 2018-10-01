function Animal(name, age) {
    this.name = name;
    this.age = age;

};

Animal.prototype.greeting = function () {
    console.log(`I'm ${this.name}`);
};


function Predator(name, age, food) {
    Animal.call(this, name, age);
    this.food = food;
}

Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.greeting = function () {
    console.log(`I'm ${this.name}, i'm eat ${this.food} `);
};


function Herbivorous(name, age, food) {
    Animal.call(this, name, age);
    this.food = food;
}

Herbivorous.prototype = Object.create(Animal.prototype);
Herbivorous.prototype.constructor = Herbivorous;
Herbivorous.prototype.greeting = function () {
    console.log(`I'm ${this.name}, i'm eat ${this.food} `);
};


function Lion(name, age, food, voice) {
    Predator.call(this, name, age, food);
    this.voice = voice;
}

Lion.prototype = Object.create(Predator.prototype);
Lion.prototype.constructor = Lion;
Lion.prototype.greeting = function () {
    console.log(`${this.voice}  ,i'm like to eat ${this.food}`);
};


function Rabbit(name, age, food, voice) {
    Herbivorous.call(this, name, age, food);
    this.voice = voice;
}

Rabbit.prototype = Object.create(Herbivorous.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.greeting = function () {
    console.log(`${this.voice}  ,i'm like to eat ${this.food}`);
};



let animal = new Animal("animal", 1);
animal.greeting();
let predator = new Predator("Predator", 10, "meat");
predator.greeting();
let herbivorous = new Herbivorous("Herbivorous", 10, "grass");
herbivorous.greeting();
let lion = new Lion("Lion", 10, "meat", "Arrrrrr");
lion.greeting();
lion.food = "gazzeles";
lion.greeting();
let rabbit = new Rabbit("Rabbit", 10, "grass", "pipipi");
rabbit.greeting();
rabbit.food = "carrots";
rabbit.greeting();