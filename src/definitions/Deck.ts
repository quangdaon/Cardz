import Card from './Card';
import { randomArrayIndex, randomBetween } from '../helpers/random';
import shufflers, { ShuffleMethod } from '../helpers/shufflers';
import sorters, { CompareFunction, GetFunction } from '../helpers/sorters';

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

	public shuffle(method: ShuffleMethod = 'default', options: any = {}): this {
		if (!(method in shufflers)) {
			throw new Error('Invalid shuffling method.');
		}

		let amount: number = options.amount || 1;

		const performShuffle = shufflers[method];

		while (amount--) {
			this._cards = performShuffle(this._cards, options);
		}

		return this;
	}

	public sort(by: string | GetFunction | CompareFunction): this {
		console.log(by);
		console.log(by.length);
		if (typeof by === 'string') {
			this._cards = sorters.byProperty(this._cards, by);
		} else if (by.length > 1) {
			this._cards = sorters.byFunction(this._cards, by as CompareFunction);
		} else {
			this._cards = sorters.byGetter(this._cards, by as GetFunction);
		}

		return this;
	}

	public cut(min: number = 1, max: number = this.length): this {
		const places = randomBetween(min, max, 1);
		for (let i = 0; i < places; i++) {
			this._cards.unshift(this._cards.pop());
		}

		return this;
	}

	public pull(): Card {
		const index = randomArrayIndex(this._cards);
		const selected = this._cards[index];
		this._cards.splice(index, 1);

		return selected;
	}

	public get cards(): Card[] {
		return [...this._cards];
	}

	public get length(): number {
		return this._cards.length;
	}
}

export default Deck;
