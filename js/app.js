
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

const moveBackAndForth = (image)=>{
    image.velocity({
        translateX: 500}, {
        easing: 'swing',
        duration: 2000,
        loop:200});
    return image;
}

const $unicornegg = $("<img src='unicornegg.gif'>").addClass('poop');
const $unicornpoop = $("<img src='unicornpoop.gif'>").addClass('poop');
const $rainbowpoop = $("<img src='rainbowpoop.gif'>").addClass('poop');
const $glitterpoop = $("<img src='glitterpoop.gif'>").addClass('poop');
const $madpoop = $("<img src='madpoop.jpg'>").addClass('poop');
const $deadpoop = $("<img src='deadpoop.jpg'>").addClass('poop');

const morph = (num)=>{
    if (num === 1){
        $('#character').html(moveBackAndForth($unicornegg));
        setTimeout(()=>{
            $('#character').html(moveBackAndForth($unicornpoop))
        }, 2000);
    }else if (num === 2){
        $('#character').html(moveBackAndForth($unicornegg));
        setTimeout(()=>{
            $('#character').html(moveBackAndForth($rainbowpoop))
        }, 2000);
    }
}

const hungerIncrease = ()=>{
    myPet.hunger++;
    $('.hunger').text(`${myPet.hunger}`);
    $('#hunger-bar').attr('style',`width: ${myPet.hunger*10}%`)
}
const boredomIncrease = ()=>{
    myPet.boredom++;
    $('.boredom').text(`${myPet.boredom}`)
    $('#boredom-bar').attr('style',`width: ${myPet.boredom*10}%`)
}
const ageIncrease = ()=>{
    myPet.age++;
    $('.age').text(`${myPet.age}`)
}
const sleepinessIncrease = ()=>{
    myPet.sleepiness++;
    $('.sleepiness').text(`${myPet.sleepiness}`)
    $('#sleep-bar').attr('style',`width: ${myPet.sleepiness*10}%`)
}
const resetStats = ()=>{
    myPet.boredom = 0;
    myPet.hunger = 0;
    myPet.sleepiness = 0;
    myPet.age = 1;
    $('.progress-bar').attr('style','width: 0');
}
const gameOver = ()=>{
    game.gameActive = false;
    $('#deathModal').modal();
    resetStats();
    clearInterval(timePassing);
    tryAgain();
}
const checkForDeath = ()=>{
    if (myPet.hunger === 10 || myPet.sleepiness === 10 || myPet.boredom === 10){
        gameOver();
    }
}
const timePasses = ()=>{
    game.time++;
    checkForDeath();

    if (game.time === 20){
        morph(1);
    }
    if (game.time === 60){
        morph(2);
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
    $('#hunger-bar').attr('style',`width: ${myPet.hunger*10}%`)
}
const sleep = ()=>{
    myPet.sleepiness -= 1;
    if (myPet.sleepiness < 1){
        myPet.sleepiness = 0;
    }
    $('.sleepiness').text(`${myPet.sleepiness}`);
    $('#sleep-bar').attr('style',`width: ${myPet.sleepiness*10}%`)
    $('body').attr('style','background-color: black;');
    setTimeout(()=>{
        $('body').attr('style','background-color: white;');
    }, 2000);
    ;
}
const play = ()=>{
    myPet.boredom -= 1;
    if (myPet.boredom < 1){
        myPet.boredom = 0;
    }
    $('.boredom').text(`${myPet.boredom}`);
    $('#boredom-bar').attr('style',`width: ${myPet.boredom*10}%`)
}
let timePassing;

const createBoard = (e)=>{
    $('#buttons').empty();
    $('#character').html(moveBackAndForth($glitterpoop));
    $(e.target).hide();
    $('#nameModal').modal();
    timePassing = setInterval(timePasses,1000);
    const $buttonBar = $('#buttons');
    const $statsBar = $('.stats');
    $statsBar.append(`Age: <span class='age'>${myPet.age}</span> <br> Hunger: <span class='hunger'>${myPet.hunger}</span> <br> Boredom: <span class='boredom'>${myPet.boredom}</span> <br> Sleepiness: <span class='sleepiness'>${myPet.sleepiness}</span>`);
    const $feedButton = $('<button/>').addClass('feeder btn').text('Feed Me').click(feed);
    const $sleepButton = $('<button/>').addClass('sleeper btn').text('Put me to sleep').click(sleep);
    const $playButton = $('<button/>').addClass('player btn').text('Play with me').click(play);
    $buttonBar.append($feedButton,$playButton,$sleepButton);
}

const tryAgain = ()=>{
    $('#character').empty();
    $('#buttons').empty();
    $('.stats').empty();
    const $startButton = $('<button/>').addClass('btn').text('Start Game!').click(createBoard);
    $('#buttons').append($startButton);
}

$('#start-game').click(createBoard)

const $nameEntered = $('input').val();

$('.name-modal').click(()=>{
    $('.titlespace').append($nameEntered);
    
})