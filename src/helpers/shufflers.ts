import Card from '../definitions/Card';
import { randomBetween } from './random';

type ShuffleFunction = (input: Card[], options?: any) => Card[];

const fisherYatesShuffle: ShuffleFunction = (input: Card[]): Card[] => {
	const cards: Card[] = [...input];
	for (let i = cards.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = cards[i];
		cards[i] = cards[j];
		cards[j] = temp;
	}

	return cards;
};

const riffleShuffle: ShuffleFunction = (input: Card[], { precision = 3 }): Card[] => {
	const cards: Card[] = [];
	const bottom = input;
	const split = randomBetween(
		Math.floor(bottom.length / 2 - (precision - 1)),
		Math.floor(bottom.length / 2 + (precision - 1)),
		1
	);

	const top = bottom.splice(split);

	const howMany = () => randomBetween(1, precision, 1);

	while (bottom.length || top.length) {
		let bottomCount = howMany();
		let topCount = howMany();
		while (bottomCount--) {
			if (bottom.length) {
				cards.push(bottom.shift());
			}
		}
		while (topCount--) {
			if (top.length) {
				cards.push(top.shift());
			}
		}
	}

	return cards;
};

const overhandShuffle: ShuffleFunction = (input: Card[], { precision = 10 }): Card[] => {
	const clone: Card[] = [...input];
	const cards: Card[] = [];

	while (clone.length) {
		const pile = clone.splice(0, randomBetween(1, Math.min(precision, clone.length), 1));

		cards.unshift(...pile);
	}

	return cards;
};

export type ShuffleMethod = 'overhand' | 'riffle' | 'default';
export type Shufflers = {
	[key in ShuffleMethod]: ShuffleFunction
};

const shufflers: Shufflers = {
	overhand: overhandShuffle,
	riffle: riffleShuffle,
	default: fisherYatesShuffle
};

export default shufflers;
