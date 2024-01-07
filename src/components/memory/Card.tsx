import { CardType } from "@shared/memory-game.utils";
import { defaultTiltOptions } from "@shared/utils";
import { Tilt } from 'react-tilt'



type Props = {
  card: CardType,
  flipped: boolean,
  interaction: boolean,
  handleChoice: (card: CardType) => void
};

export const Card = ({ card, flipped, interaction, handleChoice }: Props) => {

  const handleClick = () => {
    if (interaction) handleChoice(card)
  }

  return (
    <Tilt options={defaultTiltOptions} className="card">
      <img
        className={`card-img  ${flipped ? 'card-front-flipped' : 'card-front'}`}
        src={card.frontImage}
        alt='card-face'
        width={200}
        height={200}
      />
      <img
        className={`card-img  ${flipped ? "card-back-flipped" : 'card-back'}`}
        src={card.backImage}
        alt='card-cover'
        onClick={handleClick}
        width={200}
        height={200}
      />
    </Tilt>
  )
}