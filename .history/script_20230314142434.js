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
    /// creates deck
    createDeck() {
        const suits = ["♠", "♥", "♦", "♣"]
        const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], j + 1))
            }
        }
        this.shuffle()
    }
    shuffle() {
        /// shuffles the deck
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

    ///each player gets 26 cards (half a deck) to start:
    init() {
        const deck = new Deck()
        this.p1.push(...deck.cards.splice(0, deck.cards.length / 2));
        this.p2.push(...deck.cards);
    }


    battle() {
        /// as long as the players have cards, continue the game:
        while (this.p1.length > 0 && this.p2.length > 0) {
            /// Grab the top card from each player's hand:
            let p1Card = this.p1.pop();
            let p2Card = this.p2.pop();
            console.log(`player one's card is a ${p1Card.rank} of ${p1Card.suit}`)
            console.log(`player two's card is a ${p2Card.rank} of ${p2Card.suit}`)
            /// card values from each players hand are compared and the highest card value wins:
            if (p1Card.val > p2Card.val) {
                console.log("player 1 wins round!")
                /// there are only cards in the pile during war
                if (this.pile.length > 0) {
                    console.log("player 1 wins this round of war!")
                }
                /// player 1 wins both cards:
                this.p1.unshift(p2Card, p1Card, ...this.pile)
                this.pile.length = 0
            } else if (p2Card.val > p1Card.val) {
                console.log("player 2 wins round!")
                if (this.pile.length > 0) {
                    console.log("player 2 wins this round of war!")
                }
                /// player 2 wins both cards:
                this.p2.unshift(p1Card, p2Card, ...this.pile)
                this.pile.length = 0
            /// if there's a tie, war begins:
            } else {
                console.log("waaaaaarrrrrrrrrrrrrr!")
                this.pile.push(p2Card, p1Card)
                this.war()
            }
        } 
        // Winning Conditions:
        if (this.p1.length > 0) {
            console.log("player 1 won the game!")
            console.log("player one cards: ", this.p1.length, "player two cards: ", this.p2.length)
        } else {
            console.log("player 2 won the game!")
            console.log("player one cards: ", this.p1.length, "player two cards: ", this.p2.length)
        }
      }

    war() {
        /// if player one has 3 or less cards, they lose because war cannot commence (same for player two on line 97):
        if (this.p1.length <= 3){
        /// player two receives player ones cards (vice versa on line 117):
            this.p2.push(...this.pile, ...this.p1)
            this.p1.length = 0
        } else if (this.p2.length <= 3) {
        /// player 2 loses (see 91)
            this.p1.push(...this.pile, ...this.p2)
            this.p2.length = 0
        } else {
        /// the actual war function: both players put 3 cards into the war pile, then battle again:
            this.pile.push(...this.p1.splice(this.p1.length - 3, 3))
            this.pile.push(...this.p2.splice(this.p2.length - 3, 3))
        }
    }
}

/// begins the game:
const game = new GameOfWar()
game.battle()



