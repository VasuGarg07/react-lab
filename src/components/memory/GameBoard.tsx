import { Button, Typography } from "@mui/material"
import CardGrid from "./CardGrid";
import { useMemoryContext } from "@contexts/memory.context";

type Props = {
  name: string,
  turns: number,
  resetGame: () => void,
}

const GameBoard = () => {

  const { name, turns, resetGame }: Props = useMemoryContext();

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
      <CardGrid />
    </>
  )
}

export default GameBoard