import Difficulty from '@components/memory/Difficulty';
import { Game } from '@components/memory/Game';
import Result from '@components/memory/Result';
import { Button, Typography } from '@mui/material';
import { CardType, GameState } from '@shared/memory-game.utils';
import '@styles/MemoryGame.scss'
import { useEffect, useState } from 'react';

// TODO: Create Leaderboard
const MemoryGame = () => {

  const [name, setName] = useState("");

  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState(0);

  const [firstChoice, setFirstChoice] = useState<CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardType | null>(null);
  const [interaction, setInteraction] = useState(true);

  const [matchedPairs, setMatchedPairs] = useState(0);

  const [gameState, setGameState] = useState(GameState.Setup);

  const handleChoice = (card: CardType): void => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  const resetTurn = (): void => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(prevTurns => prevTurns + 1);
    setInteraction(true);
  }

  const resetGame = (): void => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(0);
    setCards([])
    setGameState(GameState.Setup)
  }

  useEffect(() => {
    if (matchedPairs > 0 && matchedPairs == cards.length / 2) {
      setGameState(GameState.Gameover)
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


  const renderComponent = (): JSX.Element => {
    switch (gameState) {

      case GameState.Setup:
        return (
          <Difficulty
            name={name}
            setName={setName}
            setCards={setCards}
            setGameState={setGameState}
          />
        )

      case GameState.Playing:
        return (
          <>
            <div className='header full-width padding-hr flex-centered-container'>
              <img src="/images/memory-game.png" alt="" />
              <div className='app-title text-center'>MEMORY GAME</div>
              <span className='spacer'></span>
              <div>
                <div className='text-center player'>Player: {name} </div>
                <div className='flex-centered-container' style={{ alignItems: 'baseline' }}>
                  <Typography variant="subtitle2">Turns: {turns}</Typography>
                  <Button onClick={resetGame} color='info' size='small'>Restart</Button>
                </div>
              </div>
            </div>
            <Game
              cards={cards}
              firstChoice={firstChoice}
              secondChoice={secondChoice}
              interaction={interaction}
              handleChoice={handleChoice}
            />
          </>
        )

      default:
        return (
          <Result name={name} turns={turns} resetGame={resetGame} />
        )
    }
  }


  return (
    <div className='game-container flex-centered-column'>
      {renderComponent()}
    </div>
  )
}

export default MemoryGame