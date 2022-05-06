let firstCard = 6
let secondCard = 9
// Created an array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// querySelector is more dynamic method
// asks for an element by its selector
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

// Created a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Created a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    // Render out ALL the cards we have
    cardsEl.textContent = "Cards: "
    // Created a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Renders the sum on the page
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Created a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing a new card from the deck!")
    // Created a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard()
    // Added the new card to the sum variable
    sum += card
    // Push the card to the cards array
    cards.push(card)

    // Called startGame()
    renderGame()
}