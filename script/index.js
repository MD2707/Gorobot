import { dataQuotes } from "../data/data.js";

const sleep = m => new Promise(r => setTimeout(r, m))

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * dataQuotes.length);
    return dataQuotes[randomIndex];
}

function renderQuote(quote) {
    createTypeWriter(quote,document.getElementById("quote"));
}

function animateRobot(){
    setTimeout(() => {
    $("#robot")
        .removeClass("zoom")
        .addClass("bounce");
    }, 400);
}

function createTypeWriter(quote,htmlElem){
    var typewriterRes = new Typewriter(htmlElem, {
    loop: false,
    delay: 45
    });
    typewriterRes
    .pauseFor(100)
    .typeString(quote)
    .start();   
}


animateRobot();
createTypeWriter("Moi c'est Gorobot. Le plus goret des robots !",document.getElementById("quote"));
await sleep(3000); //wait end of animaton
createTypeWriter("Soit original dans tes insultes, aller ! Regarde ce que j'ai en stock.",document.getElementById("quote"));
await sleep(5000); //wait end of animaton
// Display play button
$(".button").fadeTo(500, 1);

$(".button").on("click", function() {
    // Get random quote
    let quote = getRandomQuote();
    // Display quote
    renderQuote(quote);
});