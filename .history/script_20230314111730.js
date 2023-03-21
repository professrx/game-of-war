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
        const suits = ["♠", "♡", "♢", "♣"]
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

        // Grab the top card from each player's hand
        /// card values from each players hand are compared and the highest card value wins the cards from that round (add both drawn cards to winner's deck). 
        while (this.p1.length > 0 && this.p2.length > 0) {
            let p1Card = this.p1.pop();
            let p2Card = this.p2.pop();
            // let p1Card = this.p1.shift();
            // let p2Card = this.p2.shift();
            console.log(p1Card)
            if (p1Card.val > p2Card.val) {
                console.log("Player 1 wins round!")
            /// player 1 wins both cards
                this.p1.push(p2Card, p1Card)
            /// player 2 wins both cards
            } else if (p2Card.val > p1Card.val) {
                console.log("Player 2 wins round!")
                this.p2.push(p1Card, p2Card)
            /// if there's a tie, war begins. 
            } else {
                console.log("Time for war!")
                this.war()
                this.pile.push(p2Card, p1Card)

            }
        } 
      }

    war() {
        // let p1Card = this.p1.shift();
        // let p2Card = this.p2.shift();
        /// add 3 cards from each player to pile
        this.pile.push(this.p1Card, ...this.p1.splice(0, 3))
        this.pile.push(this.p2Card, ...this.p2.splice(0, 3))
        let p1War = this.p1.pop()
        let p2War = this.p2.pop()
        // let p1War = this.p1.shift();
        // let p2War = this.p2.shift();
        console.log(this.pile.length)
        // during war, the game is initialized again- highest value wins all the cards
        if (p1War.val > p2War.val) {
            console.log("Player 1 wins the war!")
            this.p1.push(p2War, p1War, ...this.pile)
        } else if (p2War.val > p1War.val) {
            console.log("Player 2 wins the war!")
            this.p2.push(p1War, p2War, ...this.pile)
        } else {
        // if it's a tie, war begins again.
            this.pile.push(p1War, p2War)
            this.war()
        } 
    }
}
  







const game = new GameOfWar()
// console.log()
// do { 
    game.battle()
// }
/// the game ends when one player has 52 cards (the full deck)
// while (game.p1.length > 0 && game.p2.length > 0) 



