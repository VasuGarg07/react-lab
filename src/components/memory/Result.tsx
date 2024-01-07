import { useMemoryContext } from "@contexts/memory.context"
import { Button } from "@mui/material"

type Props = {
  name: string,
  turns: number,
  resetGame: () => void,
}

const Result = () => {
  const { name, turns, resetGame }: Props = useMemoryContext();
  return (
    <div className="game-result flex-centered-container">
      <div className="image-container">
        <img src="/images/game-won.png" alt="" />
      </div>
      <div className="padding text-center flex-centered-column">
        <div className="title">Congratulations!!</div>
        <div className="caption">Player <span>{name}</span> won in <span>{turns}</span> turns.</div>
        {/* <div>Your Score has been added to Leaderboard.</div> */}
        <Button variant="contained" disableElevation onClick={resetGame} color='info' size='large'>Play Again</Button>
      </div>
    </div>
  )
}

export default Result