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
        p1 = []
        p2 = []
    }
        init() {
    ///each player gets 26 cards (half a deck) to start
        
        splitDeck = Math.ceil(Deck.length / 2);
        this.p1.push = Deck.slice().splice(0, this.splitDeck);   
        this.p2.push = Deck.slice().splice(-this.splitDeck);
        }
    }
}

/// at each initialization of the game, card values are compared and the highest wins the cards from that round. if there's a tie, war begins.

/// during war, the game is initialized again- highest value wins all the cards OR if it's a tie, war begins again.

/// the game ends when one player has 52 cards (the full deck)

GameOfWar()
const deck = new Deck()
