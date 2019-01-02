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
    time: 0,
    gameActive: true
}

const morph = ()=>{
    $('#character').html("<img src='gremlin.jpg'>")
}

const hungerIncrease = ()=>{
    myPet.hunger++;
    $('.hunger').text(`${myPet.hunger}`);
}
const boredomIncrease = ()=>{
    myPet.boredom++;
    $('.boredom').text(`${myPet.boredom}`)
}
const ageIncrease = ()=>{
    myPet.age++;
    $('.age').text(`${myPet.age}`)
}
const sleepinessIncrease = ()=>{
    myPet.sleepiness++;
    $('.sleepiness').text(`${myPet.sleepiness}`)
}

const timePasses = ()=>{
    game.time++;

    if (myPet.age === 5){
        morph();
    }
    if (game.time % 3 === 0){
        hungerIncrease();
    }
    if (game.time % 5 === 0){
        boredomIncrease();
    }
    if (game.time % 20 === 0){
        ageIncrease();
    }
    if (game.time % 10 === 0){
        sleepinessIncrease();
    }
}

const timePassing = setInterval(timePasses,1000);

const feed = ()=>{
    myPet.hunger -= 1;
    $('.hunger').text(`${myPet.hunger}`);
}
const sleep = ()=>{
    myPet.sleepiness -= 1;
    $('.sleepiness').text(`${myPet.sleepiness}`);
}
const play = ()=>{
    myPet.boredom -= 1;
    $('.boredom').text(`${myPet.boredom}`);
}

const createBoard = ()=>{
    const $buttonBar = $('<div/>').attr('id','buttons');
    const $statsBar = $('<div/>').attr('id','stats').html(`Age: <span class='age'>${myPet.age}</span>\nHunger: <span class='hunger'>${myPet.hunger}</span>\nBoredom: <span class='boredom'>${myPet.boredom}</span>\nSleepiness: <span class='sleepiness'>${myPet.sleepiness}</span>`);
    const $feedButton = $('<button/>').addClass('feeder').text('Feed Me').click(feed);
    const $sleepButton = $('<button/>').addClass('sleeper').text('Put me to sleep').click(sleep);
    const $playButton = $('<button/>').addClass('player').text('Play with me').click(play);
    $buttonBar.append($feedButton,$playButton,$sleepButton);
    $('body').append($buttonBar,$statsBar);
}

createBoard();