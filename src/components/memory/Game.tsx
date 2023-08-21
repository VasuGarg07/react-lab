import { CardType } from "@shared/memory-game.utils"
import { Card } from "./Card"

type Props = {
  cards: CardType[],
  firstChoice: CardType | null,
  secondChoice: CardType | null,
  interaction: boolean,
  handleChoice: (card: CardType) => void
}

export const Game = ({ cards, firstChoice, secondChoice, interaction, handleChoice }: Props) => {

  return (
    <div className="card-grid">
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