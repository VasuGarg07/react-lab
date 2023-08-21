import card1 from '@assets/images/001.png';
import card2 from '@assets/images/002.png';
import card3 from '@assets/images/003.png';
import card4 from '@assets/images/004.png';
import card5 from '@assets/images/005.png';
import card6 from '@assets/images/006.png';
import card7 from '@assets/images/007.png';
import card8 from '@assets/images/008.png';
import card9 from '@assets/images/009.png';
import card10 from '@assets/images/0010.png';
import card11 from '@assets/images/0011.png';
import card12 from '@assets/images/0012.png';
import cover from '@assets/images/pokemon_card_back.jpg';

export type CardType = {
  id: string,
  frontImage: string,
  backImage: string,
  matchingCardId: string,
  matched: boolean
};

const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

export function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
};

export const loadCards = (num: number = 4): CardType[] => {
  const cardSet = shuffleArray(cards).slice(0, num)
  const gameCards = [...cardSet, ...cardSet].map((card, i) => ({
    id: `card${i}`,
    frontImage: card,
    backImage: cover,
    matchingCardId: i < cardSet.length ? `card${i + cardSet.length}` : `card${i - cardSet.length}`,
    matched: false,
  }))
  return shuffleArray(gameCards)
};