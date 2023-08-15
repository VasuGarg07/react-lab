import { Dialog, Typography } from '@mui/material';
import { Meal } from '../../shared/interface';
import '@styles/foodmenu/FoodModal.scss';

interface ModalProps {
  open: boolean;
  meal: Meal;
  handleClose: () => void;
}


const MealModal = ({ open, meal, handleClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={() => handleClose()} maxWidth='sm' scroll='paper'>
      <div className='modal-container'>
        <div className='thumbnail' style={{ backgroundImage: `url(${meal.image})` }} />
        <div className='content padding margin'>
          <Typography className='name' variant="h5" component="div"> {meal.name} </Typography>
          <Typography variant="subtitle1" color="text.secondary"> {meal.category} - {meal.area} </Typography>
          <hr />
          <Typography gutterBottom className='text' variant="body1"> <span className='text-bold'>Ingredients - </span> {meal.ingredients.join(', ')} </Typography>
          <hr />
          <Typography className='text' variant="body1"> <span className='text-bold'>Instructions - </span> {meal.instructions} </Typography>
        </div>
      </div>
    </Dialog>
  )
}

export default MealModal