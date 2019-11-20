import Card from './Card';

class Deck {
	protected _cards: Card[] = [];

	constructor() {
		this.reset();
	}

	public reset(): Deck {
		this._cards = [];
		return this;
	}

	public draw(amt: number = 1): Card | Card[] {
		if (amt < 1) {
			throw new Error('Draw amount must be a positive number.');
		}

		return amt === 1 ? this._cards.shift() : this._cards.splice(0, amt);
	}

	public add(card: Card): Deck {
		this._cards.push(card);
		return this;
	}

	public get cards(): Card[] {
		return this._cards;
	}
}

export default Deck;
