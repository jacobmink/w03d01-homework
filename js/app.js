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
    $('#character').html("<img src='unicornegg.gif'>");
    setTimeout(()=>{
        $('#character').html("<img src='unicornpoop.gif'>")
    }, 2000);
    // $('#character').html("<img src='unicornpoop.gif'>")
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

const gameOver = ()=>{
    game.gameActive = false;
    alert('Your pet died from your shitty ownership!');
    myPet.boredom = 0;
    myPet.hunger = 0;
    myPet.sleepiness = 0;
    myPet.age = 1;
    clearInterval(timePassing);
    startGame();
}

const checkForDeath = ()=>{
    if (myPet.hunger === 10 || myPet.sleepiness === 10 || myPet.boredom === 10){
        gameOver();
    }
}

const timePasses = ()=>{
    game.time++;
    checkForDeath();

    if (myPet.age === 5){
        morph();
    }
    if (game.time % 5 === 0){
        hungerIncrease();
    }
    if (game.time % 3 === 0){
        boredomIncrease();
    }
    if (game.time % 20 === 0){
        ageIncrease();
    }
    if (game.time % 10 === 0){
        sleepinessIncrease();
    }
}
const feed = ()=>{
    myPet.hunger -= 1;
    if (myPet.hunger < 1){
        myPet.hunger = 0;
    }
    $('.hunger').text(`${myPet.hunger}`);
}
const sleep = ()=>{
    myPet.sleepiness -= 1;
    if (myPet.sleepiness < 1){
        myPet.sleepiness = 0;
    }
    $('.sleepiness').text(`${myPet.sleepiness}`);
    $('body').attr('style','background-color: black;');
    setTimeout(()=>{
        $('body').attr('style','background-color: white;');
    }, 3000);
    ;
}
const play = ()=>{
    myPet.boredom -= 1;
    if (myPet.boredom < 1){
        myPet.boredom = 0;
    }
    $('.boredom').text(`${myPet.boredom}`);
}
let timePassing;

const createBoard = (e)=>{
    $(e.target).hide();
    timePassing = setInterval(timePasses,1000);
    const $buttonBar = $('#buttons');
    const $statsBar = $('.stats');
    $statsBar.append(`Age: <span class='age'>${myPet.age}</span> <br> Hunger: <span class='hunger'>${myPet.hunger}</span> <br> Boredom: <span class='boredom'>${myPet.boredom}</span> <br> Sleepiness: <span class='sleepiness'>${myPet.sleepiness}</span>`);
    const $feedButton = $('<button/>').addClass('feeder').text('Feed Me').click(feed);
    const $sleepButton = $('<button/>').addClass('sleeper').text('Put me to sleep').click(sleep);
    const $playButton = $('<button/>').addClass('player').text('Play with me').click(play);
    $buttonBar.append($feedButton,$playButton,$sleepButton);
}

const startGame = ()=>{
    $('#buttons').empty();
    $('.stats').empty();
    const $startButton = $('<button/>').text('Start Game!').click(createBoard);
    $('#buttons').append($startButton);
}

startGame();