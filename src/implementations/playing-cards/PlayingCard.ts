import Card from '../../definitions/Card';

export const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const;
export const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'] as const;

export type Rank = typeof ranks[number];
export type Suit = typeof suits[number];
export type Color = 'red' | 'black';

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
