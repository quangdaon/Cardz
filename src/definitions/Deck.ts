import Card from './Card';

class Deck {
	private _cards: Card[] = [];

	constructor() {
		this.reset();
	}

	public reset(): Deck {
		this._cards = [];
		return this;
	}

	public get cards(): Card[] {
		return this._cards;
	}
}

export default Deck;
