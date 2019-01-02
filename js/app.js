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

const game = {
    time: 100
}

const hungerIncrease = ()=>{
    myPet.hunger += 1;
}

const morph = ()=>{
    $('#character').html("<img src='gremlin.jpg'>")
}

const timePasses = ()=>{
    if (game.time === 100){
        morph();
    }
    if (game.time % 3 === 0){
        hungerIncrease(myPet);
    }
    
    boredomIncrease();
    ageIncrease();
    sleepinessIncrease();
}

const feed = ()=>{
    myPet.hunger -= 1;
    console.log(myPet.hunger);
}

const sleep = ()=>{
    myPet.sleepiness -= 1;
    console.log(myPet.sleepiness)
}

const play = ()=>{
    myPet.boredom -= 1;
    console.log(myPet.boredom)
}

const createBoard = ()=>{
    const $buttonBar = $('<div/>').attr('id','buttons');
    const $statsBar = $('<div/>').attr('id','stats').html(`Age: ${myPet.age}\nHunger: ${myPet.hunger}\nBoredom: ${myPet.boredom}\nSleepiness: ${myPet.sleepiness}`);
    const $feedButton = $('<button/>').addClass('feeder').text('Feed Me').click(feed);
    const $sleepButton = $('<button/>').addClass('sleeper').text('Put me to sleep').click(sleep);
    const $playButton = $('<button/>').addClass('player').text('Play with me').click(play);
    $buttonBar.append($feedButton,$playButton,$sleepButton);
    $('body').append($buttonBar,$statsBar);
}

const startGame = ()=>{
    const $startButton = $('<button/>').text('Start Game!').click(
        (e)=>{
            $(e.target).hide();
            createBoard();
        }
        );
    $('body').append($startButton);
}

startGame();