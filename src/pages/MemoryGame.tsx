import Difficulty from '@components/memory/Difficulty';
import GameBoard from '@components/memory/GameBoard';
import Result from '@components/memory/Result';
import { useMemoryContext } from '@contexts/memory.context';
import { GameState } from '@shared/memory-game.utils';
import '@styles/MemoryGame.scss';

type Props = {
  gameState: GameState
}
// TODO: Create Leaderboard
const MemoryGame = () => {

  const { gameState }: Props = useMemoryContext();

  const renderComponent = (): JSX.Element => {
    switch (gameState) {
      case GameState.Setup:
        return <Difficulty />
      case GameState.Playing:
        return <GameBoard />
      default:
        return <Result />
    }
  }


  return (
    <div className='game-container flex-centered-column'>
      {renderComponent()}
    </div>
  )
}

export default MemoryGame