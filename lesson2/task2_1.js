class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`I'm ${this.name}`);
    };
}

class Predator extends Animal {
    constructor(name, age, food) {
        super(name, age)
        this.food = food;
    }

    greeting() {
        console.log(`I'm ${this.name}, i'm eat ${this.food} `);
    };
}

class Herbivorous extends Animal {
    constructor(name, age, food) {
        super(name, age)
        this.food = food;
    }

    greeting() {
        console.log(`I'm ${this.name}, i'm eat ${this.food} `);
    };
}

class Lion extends Predator {
    constructor(name, age, food, voice) {
        super(name, age, food)
        this.voice = voice;
    }

    greeting() {
        console.log(` ${this.voice} + i'm like to eat ${this.food}  `);
    };

    get myfood() {
        return this.food;
    }

    set myfood(newFood) {
        this.food = newFood;
    }
}

class Rabbit extends Herbivorous {
    constructor(name, age, food, voice) {
        super(name, age, food)
        this.voice = voice;
    }

    greeting() {
        console.log(`${this.voice}  ,i'm like to eat ${this.food}`);
    };

    get myfood() {
        return this.food;
    }

    set myfood(newFood) {
        this.food = newFood;
    }
}


let animal = new Animal("Animal", 10);
animal.greeting();
let predator = new Predator("Predator", 10, "meat");
predator.greeting();
let herbivorous = new Herbivorous("Herbivorous", 10, "grass");
herbivorous.greeting();
let lion = new Lion("Lion", 10, "meat", "Arrrrrr");
lion.greeting();
lion.myfood = "gazzeles";
lion.greeting();
let rabbit = new Rabbit("Rabbit", 10, "grass", "pipipi");
rabbit.greeting();
rabbit.myfood = "carrots";
rabbit.greeting();


