let cardsBlock = document.querySelector('.cards');
let cards = document.querySelectorAll('cards >div');

function start() {
    let random = Math.floor(Math.random() * 18);
    cardsBlock.style.left = -random * 100 + "px";
    random++;
}