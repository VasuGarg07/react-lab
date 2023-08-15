import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Meal } from '../../shared/interface';
import { useCookBookContext } from '@contexts/cookboox.context';
import MealModal from './MealModal';
import '@styles/foodmenu/FoodFavorites.scss'

interface Props { favorites: Meal[] }

const Favorites = ({ favorites }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [select, setSelect] = useState(0)
  const { removeFromFavorites } = useCookBookContext();

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
      <Typography variant="subtitle1" style={{ color: 'white' }}> Favorite Meals</Typography>
      <div className='favorites display-flex'>
        {favorites.map((drink: Meal) => {
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
      <MealModal open={modalOpen} meal={favorites[select]} handleClose={handleClose} />
    </div>
  )
}

export default Favorites