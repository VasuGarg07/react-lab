import { Game } from '@components/memory/Game';
import { Button } from '@mui/material';
import { CardType, loadCards } from '@shared/memory-game.utils';
import '@styles/MemoryGame.scss'
import { useEffect, useState } from 'react';

// TODO: Game Difficulty and Winning Banner
const MemoryGame = () => {
  const [cards, setCards] = useState<CardType[]>(loadCards());
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState<CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardType | null>(null);
  const [interaction, setInteraction] = useState(true);
  const [matchedPairs, setMatchedPairs] = useState(0);

  const handleChoice = (card: CardType): void => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  const resetTurn = (): void => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(prevTurns => prevTurns + 1);
    setInteraction(true);
  }

  const restartGame = (): void => {
    setFirstChoice(null);
    setSecondChoice(null);
    setCards(loadCards())
    setTurns(0);
  }

  useEffect(() => {
    // console.log(matchedPairs)
    if (matchedPairs == cards.length / 2) {
      // restartGame()
    }
  }, [matchedPairs])

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setInteraction(false)

      if (firstChoice.id === secondChoice.matchingCardId) {
        setCards(prevCards => prevCards.map(card => {
          if (card.id === firstChoice.id || card.id === secondChoice.id) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        }))
        setMatchedPairs(prev => prev + 1);
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [firstChoice, secondChoice])



  return (
    <div className='game-container flex-centered-column'>
      <div className='header full-width padding-hr flex-centered-container'>
        <img src="/images/memory-game.png" alt="" />
        <div className='app-name text-center'>MEMORY GAME</div>
        <span className='spacer'></span>
        {turns > 0 && <p>SCORE: {turns}</p>}
        <Button variant='outlined' onClick={restartGame} color='info'>Reset Game</Button>
      </div>
      <Game
        cards={cards}
        firstChoice={firstChoice}
        secondChoice={secondChoice}
        interaction={interaction}
        handleChoice={handleChoice}
      />
    </div>
  )
}

export default MemoryGame