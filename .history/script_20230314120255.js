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
        const suits = ["♠", "♥", "♦", "♣"]
        const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

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
        const deck = new Deck()
        this.p1.push(...deck.cards.splice(0, deck.cards.length / 2));
        this.p2.push(...deck.cards);
    }

    // battle() {
    //     // Set up game logic loop (a player has no more cards)
    //     let p1Card = this.p1.pop();
    //     let p2Card = this.p2.pop();
    
    //     if (p1Card.val === p2Card.val) {
    //       console.log("War!!!");
    //       this.pile.push(p1Card, p2Card)
    //       this.war()
    //     } else if (p1Card.val > p2Card.val) {
    //       this.p1.unshift(p2Card, p1Card, ...this.pile)
    //       // clear the pile
    //       console.log("Player 1 Wins!");
    //     } else {
    //       console.log("Player 2 Wins!");
    //       this.p2.unshift(p1Card, p2Card, ...this.pile)
    //       // clear the pile
    //     }
    //   }
    

    battle() {

        while (this.p1.length > 0 && this.p2.length > 0) {
            /// Grab the top card from each player's hand
            let p1Card = this.p1.pop();
            let p2Card = this.p2.pop();
            console.log(p1Card)
            /// card values from each players hand are compared and the highest card value wins
            if (p1Card.val > p2Card.val) {
                console.log("Player 1 wins round!")
                /// there are only cards in the pile during war
                if (this.pile.length > 0) {
                    console.log("Player 1 wins this round of war!")
                }
                /// player 1 wins both cards
                this.p1.unshift(p2Card, p1Card, ...this.pile)
                this.pile.length = 0
            } else if (p2Card.val > p1Card.val) {
                console.log("Player 2 wins round!")
                if (this.pile.length > 0) {
                    console.log("Player 2 wins this round of war!")
                }
                /// player 2 wins both cards
                this.p2.unshift(p1Card, p2Card, ...this.pile)
                this.pile.length = 0
            /// if there's a tie, war begins. 
            } else {
                console.log("WAR!")
                this.pile.push(p2Card, p1Card)
                this.war()
            }
        } 
        // Winning Conditions
        if (this.p1.length > 0) {
            console.log("Player 1 won the game!")
            console.log("Player One Cards: ", this.p1.length, "Player Two Cards: ", this.p2.length)
        } else {
            console.log("Player 2 won the game!")
            console.log("Player One Cards: ", this.p1.length, "Player Two Cards: ", this.p2.length)
        }
      }

    war() {
        if (this.p1.length <= 3){
            // Player 1 loses
            this.p2.push(...this.pile, ...this.p1)
            this.p1.length = 0
        } else if (this.p2.length <= 3) {
            // Player 2 loses
            this.p1.push(...this.pile, ...this.p2)
            this.p2.length = 0
        } else {
            this.pile.push(...this.p1.splice(this.p1.length - 3, 3))
            this.pile.push(...this.p2.splice(this.p2.length - 3, 3))
        }
    }
}
  
const game = new GameOfWar()

game.battle()



