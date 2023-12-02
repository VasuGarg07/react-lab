import ErrorMessage from "@components/ErrorMessage"
import { useMemoryContext } from "@contexts/memory.context";
import { Button, TextField, Typography } from "@mui/material";
import { CardType, GameMode, GameState, loadCards } from "@shared/memory-game.utils";
import { useState } from "react";

type Props = {
  name: string,
  difficulty: GameMode | undefined
  setName: React.Dispatch<React.SetStateAction<string>>,
  setDifficulty: React.Dispatch<React.SetStateAction<GameMode | undefined>>,
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>
  setGameState: React.Dispatch<React.SetStateAction<GameState>>
}

const Difficulty = () => {

  const { name, difficulty, setName, setDifficulty, setCards, setGameState }: Props = useMemoryContext()

  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      switch (difficulty) {
        case GameMode.Easy:
          setCards(loadCards(6));
          break;
        case GameMode.Medium:
          setCards(loadCards(8));
          break;
        default:
          setCards(loadCards(12));
          break;
      }
      setGameState(GameState.Playing)
    }
  };

  return (
    <div className="game-mode padding flex-centered-column">
      <div className='padding-hr flex-centered-container'>
        <img src="/images/memory-game.png" alt="" />
        <div className='app-title text-center'>MEMORY GAME</div>
      </div>

      {/* <Typography variant="h5" className="section-title text-center">Game Settings</Typography> */}
      {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

      <div className="flex-centered-container-vr">
        <Typography variant="subtitle1" className="section-title text-center">Player Name: </Typography>
        <TextField
          placeholder="Enter Your Name"
          variant="outlined"
          color="secondary"
          size='small'
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex-centered-container-vr">
        <Typography
          variant="subtitle1"
          className="section-title text-center"        >
          Game Mode:
        </Typography>

        <Button
          variant={difficulty == GameMode.Easy ? 'contained' : 'outlined'}
          disableElevation
          size="large"
          color="success"
          onClick={() => setDifficulty(GameMode.Easy)}>
          Easy
        </Button>

        <Button
          variant={difficulty == GameMode.Medium ? 'contained' : 'outlined'}
          disableElevation
          size="large"
          color="warning"
          onClick={() => setDifficulty(GameMode.Medium)}>
          MEDIUM
        </Button>

        <Button
          variant={difficulty == GameMode.Difficult ? 'contained' : 'outlined'}
          disableElevation
          size="large"
          color="error"
          onClick={() => setDifficulty(GameMode.Difficult)}>
          HARD
        </Button>
      </div>

      <Button variant="contained" size="small" color="info" onClick={handleSubmit}      >
        Start Game
      </Button>
    </div>
  )
}

export default Difficulty