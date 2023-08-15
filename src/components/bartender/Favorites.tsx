import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Drink } from '@shared/interface';
import { useBartenderContext } from '@contexts/bartender.context';
import DrinkModal from './DrinkModal';
import '@styles/foodmenu/FoodFavorites.scss'

interface Props { favorites: Drink[] }

const Favorites = ({ favorites }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [select, setSelect] = useState(0)
  const { removeFromFavorites } = useBartenderContext();

  const handleOpen = (idDrink: string) => {
    const index = favorites.findIndex(drink => drink.id == idDrink)
    if (index > -1) {
      setSelect(index);
      setModalOpen(true)
    }
  }

  const handleClose = () => setModalOpen(false);

  const handleRemove = (id: string) => removeFromFavorites(id)

  return (
    <div className='favorite-container'>
      <Typography variant="subtitle1" style={{ color: 'white' }}> Favorite Drinks</Typography>
      <div className='favorites display-flex'>
        {favorites.map((drink: Drink) => {
          return (
            <div key={drink.id} className='fvrt-icon'>
              <img loading='eager' src={drink.image} alt={drink.name} onClick={() => handleOpen(drink.id)} />
              <IconButton size='small' className='remove-btn' onClick={() => handleRemove(drink.id)}>
                <CloseIcon className='icon' />
              </IconButton>
            </div>
          )
        })}
      </div>
      <DrinkModal open={modalOpen} drink={favorites[select]} handleClose={handleClose} />
    </div>
  )
}

export default Favorites