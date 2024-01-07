import MemoryGame from "@pages/MemoryGame";
import { CardType, GameMode, GameState } from "@shared/memory-game.utils";
import { createContext, useContext, useEffect, useState } from "react";

const MemoryGameContext = createContext<any>(null);

export const MemoryProvider = () => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState<GameMode>();

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
    setName('');
    setDifficulty(undefined);
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(0);
    setCards([]);
    setGameState(GameState.Setup);
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

  const value = {
    name,
    setName,
    difficulty,
    setDifficulty,
    turns,
    cards,
    setCards,
    gameState,
    setGameState,
    firstChoice,
    secondChoice,
    interaction,
    handleChoice,
    resetGame
  }

  return (
    <MemoryGameContext.Provider value={value}>
      <MemoryGame />
    </MemoryGameContext.Provider>
  )
}

export const useMemoryContext = () => {
  return useContext(MemoryGameContext)
}