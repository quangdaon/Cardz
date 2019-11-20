import Deck from '../../definitions/Deck';
import PlayingCard, { suits, ranks } from './PlayingCard';

class PlayingCardDeck extends Deck {
	constructor() {
		super();
	}

	public reset(): PlayingCardDeck {
		super.reset();

		suits.forEach(s => {
			ranks.forEach(f => {
				this.add(new PlayingCard(s, f));
			});
		});

		return this;
	}
}

export default PlayingCardDeck;
