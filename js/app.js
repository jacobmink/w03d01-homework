console.log('test');

class Pet {
    constructor(health, age, hunger, sleepiness, boredom){
        this.health = health;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
}

const myPet = new Pet(10,1,0,0,0);