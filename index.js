// Created the player object. Gave it two keys, name and chips, and set their values
let player = {
    name: "Nick",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// querySelector is more dynamic method
// asks for an element by its selector
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
// Got ahold of the player-el paragraph and stored it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// Rendered the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
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
}