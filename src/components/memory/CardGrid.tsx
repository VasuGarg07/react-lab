import { CardType, GameMode } from "@shared/memory-game.utils"
import { Card } from "./Card"
import { useMemoryContext } from "@contexts/memory.context"

type Props = {
  difficulty: string,
  cards: CardType[],
  firstChoice: CardType | null,
  secondChoice: CardType | null,
  interaction: boolean,
  handleChoice: (card: CardType) => void
}

const CardGrid = () => {

  const { cards, difficulty, firstChoice, secondChoice, interaction, handleChoice }: Props = useMemoryContext();

  function gridSize() {
    return difficulty == GameMode.Easy ? 6 : 8
  }

  return (
    <div className="card-grid"
      style={{ gridTemplateColumns: `repeat(${gridSize()}, 1fr)` }}
    >
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          flipped={card === firstChoice || card === secondChoice || card.matched}
          interaction={interaction}
          handleChoice={handleChoice}
        />
      ))}
    </div>
  )
}
export default CardGrid