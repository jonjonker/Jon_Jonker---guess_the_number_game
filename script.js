
const userName = prompt('Welkom! Wat is je naam?');
alert(`Hey ${userName}! Let's get started`);

alert(`Voer een nummer in van 0 tot 25 om te beginnen met raden.`);

const getRandom = function () {
    return Math.floor(Math.random(0) * Math.floor(26));
}
console.log(getRandom());

const userNumber = prompt('Voer nu je nummer in, en klik op OK om te spelen')

if (getRandom == userNumber) {
    alert(`Het nummer is ${getRandom}  Jouw nummer ${userName} , was ${userNumber} Je hebt gewonnen!`)
} else {
    alert(`Het nummer is ${getRandom}  Jouw nummer ${userName} , was ${userNumber} Je hebt verloren!`)
}

alert(`Het spel is afgelopen, see you next time, ${userName} `)


