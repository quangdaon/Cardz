import Card from '../../definitions/Card';

export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
export type Suit = 'Spades' | 'Hearts' | 'Clubs' | 'Diamonds';
export type Color = 'red' | 'black';

export const ranks: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const suits: Suit[] = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

class PlayingCard extends Card {
	public suit: Suit;
	public color: Color;
	public rank: Rank;
	public value: number;

	constructor(suit, rank) {
		super();

		this.suit = suit;
		this.color = suits.indexOf(this.suit) % 2 ? 'red' : 'black';
		this.rank = rank;
		this.value = ranks.indexOf(this.rank) + 1;
	}
}

export default PlayingCard;
