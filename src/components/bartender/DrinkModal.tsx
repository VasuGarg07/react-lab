import { Dialog, Typography } from '@mui/material';
import { Drink } from '@shared/interface';
import '@styles/foodmenu/FoodModal.scss';

interface ModalProps {
  open: boolean;
  drink: Drink;
  handleClose: () => void;
}


const DrinkModal = ({ open, drink, handleClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={() => handleClose()} maxWidth='sm'>
      <div className='modal-container'>
        <div className='thumbnail' style={{ backgroundImage: `url(${drink.image})` }} />
        <div className='content padding margin' style={{ height: 'auto' }}>
          <Typography className='name' variant="h5" component="div"> {drink.name} </Typography>
          <Typography variant="subtitle1" color="text.secondary"> {drink.category} - {drink.type} - {drink.glass} </Typography>
          <hr />
          <Typography gutterBottom className='text' variant="body1"> <span className='text-bold'>Ingredients - </span> {drink.ingredients.join(', ')} </Typography>
          <Typography className='text' variant="body1"> <span className='text-bold'>Instructions - </span> {drink.instructions} </Typography>
        </div>
      </div>
    </Dialog>
  )
}

export default DrinkModal