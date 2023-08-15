let timeWatch = document.getElementById("time")
let lightModeIcon = '<span class="material-symbols-outlined">light_mode</span>'

randomQuoteGenerator()

timeInterval = setInterval(timeDisplay,1000)

function timeDisplay(){
    let date = new Date()
    let time = date.toLocaleTimeString()
    timeWatch.textContent = time
}

function modeChange() {
    document.body.classList.toggle(".darkmode")
    console.log("Done")
  }

function randomQuoteGenerator() {
    let quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Life is short. Smile while you still have teeth.",
        "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
        "When nothing goes right, go left.",
        "If you think you are too small to make a difference, try sleeping with a mosquito.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I used to play piano by ear, but now I use my hands.",
        "Don't worry about what people think. They don't do it very often.",
        "Why don't scientists trust stairs? Because they're always up to something!",
        "If at first you don't succeed, skydiving is not for you.",
        "Do not argue with an idiot. He will drag you down to his level and beat you with experience.",
        "Change is not a four-letter word... but often your reaction to it is!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "You don't need a parachute to go skydiving. You need a parachute to go skydiving twice.",
        "The early bird might get the worm, but the second mouse gets the cheese.",
        "I used to be indecisive. Now I'm not sure.",
        "Why did the math book look sad? Because it had too many problems.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "What do you call a bear with no teeth? A gummy bear!",
        "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
        "When life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!",
        "The difference between stupidity and genius is that genius has its limits. - Albert Einstein",
        "I used to be a baker, but I couldn't make enough dough.",
        "Did you hear about the claustrophobic astronaut? He just needed a little space.",
        "How do you organize a space party? You planet!",
    ];
    let qdisplay = document.getElementById("quotedisplay");

    let randomNumber = Math.floor(Math.random() * quotes.length);
    qdisplay.textContent = quotes[randomNumber];
}

function clickSound(){
    let clicking = new Audio("click.mp3")
    clicking.volume= 0.2;
    clicking.play(1)
}