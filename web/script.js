// Getting Nav Elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Getting Card Elements
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

// Creating Array of Cards
const cards = [card1, card2, card3];

// Getting Article Elements
const article1 = document.getElementById("article1");
const article2 = document.getElementById("article2");
const article3 = document.getElementById("article3");

// Adding Event Listener To Nav Elements
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle("active");
});
navLinks.addEventListener('click', function() {
    navLinks.classList.toggle("active");
});

// Adding Event Listener To Each Cards
cards.forEach(card => {
    card.addEventListener('click', function() {

        switch (card) {
            case card1:
                article1.classList.toggle("show");
                article2.classList.remove("show");
                article3.classList.remove("show");
                break;
            case card2:
                article1.classList.remove("show");
                article2.classList.toggle("show");
                article3.classList.remove("show");
                break;
            case card3:
                article1.classList.remove("show");
                article2.classList.remove("show");
                article3.classList.toggle("show");
                break;
            default:
                break;
        }

        card.classList.toggle("selected");
        cards.forEach(c => {
            if (c !== card) {
                c.classList.remove("selected");
            }
        });
    });
});
