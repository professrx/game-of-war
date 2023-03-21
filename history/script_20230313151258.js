class Card {
    constructor(suit, rank, value) {
        this.suit = suit
        this.rank = rank
        this.val = value
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.createDeck()
    }

    createDeck() {
        let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], j + 1))
            }
        }
        this.shuffle()
    }
    shuffle() {
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random())
    }
}

class GameOfWar {
    constructor() {
        this.p1 = []
        this.p2 = []
        this.pile = []
        this.init() 
    }
    ///each player gets 26 cards (half a deck) to start
    init() {
        let deck = new Deck()
        const splitDeck = Math.ceil(deck.cards.length / 2)
        let halfDeck = deck.cards.splice(0, splitDeck)
    ///assign each player half of the card deck
        this.p1.push(...halfDeck)
        this.p2.push(...deck.cards)
    }
/// initialize the game by taking one card from each players hand 
    battle() {
        // Grab the top card from each player's hand
        let p1Card = this.p1.pop()
        let p2Card = this.p2.pop()

        // Compare the cards to see who wins
        if (p1Card.val > p2Card.val) {
            console.log("Player 1 wins round!")
            // What do I do after player 1 wins?
            this.p1.push(p2Card, p1Card)
            console.log(this.p1.length)

        } else if (p2Card.val > p1Card.val) {
            console.log("Player 2 wins round!")
            this.p2.push(p2Card, p1Card)
            console.log(this.p2.length)


        } else {
            console.log("Time for war!")
            this.pile.push(p2Card, p1Card)
            this.war()
        }
    }

    war() {
        // add 3 cards from each player to pile
        let warPile = []
        let p1Card = this.p1.pop()
        let p2Card = this.p2.pop()
        warPile.push(...this.p1.slice(0, 3), ...this.p2.slice(0, 3))
        this.warPile.push(pile)
        console.log(this.pile.length)


        // Draw
        if (p1Card.val > p2Card.val) {
            console.log("Player 1 wins round!")
            this.p1.push(warPile.splice(0, 6), p2Card, p1Card)
        } else if (p2Card.val > p1Card.val) {
            console.log("Player 2 wins round!")
            this.p2.push(warPile.splice(0, 6), p2Card, p1Card)
        } else {
            this.war()
        }


    }
}

/// card values from each players hand are compared and the highest card value wins the cards from that round (add both drawn cards to winner's deck). if there's a tie, war begins. 


/// during war, the game is initialized again- highest value wins all the cards OR if it's a tie, war begins again.


/// the game ends when one player has 52 cards (the full deck)


// const deck = new Deck()
// console.log(deck)
const game = new GameOfWar()
console.log(game)
game.battle()



