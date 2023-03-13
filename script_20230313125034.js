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
        this.init() 
    }
    ///each player gets 26 cards (half a deck) to start
    init() {
        let deck = new Deck
        let splitDeck = Math.ceil(deck.cards.length / 2);
        let halfDeck = deck.cards.splice(0, splitDeck)
    ///assign each player half of the card deck
        this.p1.push(...halfDeck)
        this.p2.push(...deck.cards)
     
    }
/// initialize the game by taking one card from each players hand 
    // battle() {

    // }
}


/// card values from each players hand are compared and the highest card value wins the cards from that round (add both drawn cards to winner's deck). if there's a tie, war begins. 


/// during war, the game is initialized again- highest value wins all the cards OR if it's a tie, war begins again.


/// the game ends when one player has 52 cards (the full deck)






