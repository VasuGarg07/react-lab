import { Typography } from '@mui/material';
import { DrinkInfo } from '@shared/interface';
import '@styles/foodmenu/FoodDetails.scss';
import { useLoaderData, useNavigate } from 'react-router-dom';

import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';


export const DrinkDetails = () => {

  const navigate = useNavigate();


  const drink = useLoaderData() as DrinkInfo;

  return (
    <div className='full-width padding dish-container flex-centered-column'>
      <div className='section padding text-center'>
        <div className='image-container full-width'>
          <img src={drink.image} alt={drink.name} />
        </div>

        <Typography variant='h3' className='dish-name padding'>{drink.name}</Typography>

        <div className='drink-actions actions flex-centered-container'>
          <Typography variant='button' className='sub-text'>
            Type: <span className='navlink' onClick={() => navigate(`/bartender/type/${drink.type.toLocaleLowerCase()}`)}>
              {drink.type}
            </span>
          </Typography>
          <Typography variant='button' className='sub-text'>
            Category: <span className='navlink' onClick={() => navigate(`/bartender/category/${drink.category.toLocaleLowerCase()}`)}>
              {drink.category}
            </span>
          </Typography>
          <Typography variant='button' className='sub-text'>
            Glass: <span className='navlink' onClick={() => navigate(`/bartender/glass/${drink.glass.toLocaleLowerCase()}`)}>
              {drink.glass}
            </span>
          </Typography>
        </div>

        {/* <div className='tags flex-centered-container'>
          {dish.tags.map(tag => <div key={tag} className='tag'>{tag}</div>)}
        </div> */}

      </div>
      <div className='section padding'>
        <Typography variant='h4' className='section-name'>Ingredients</Typography>
        <div className='drink-ing ingredients flex-centered-container-vr'>
          {drink.ingredients.map((ingredient, index) => <div className='ingredient' key={index}>{ingredient}</div>)}
        </div>
      </div>
      <div className='section padding'>
        <Typography variant='h4' className='section-name'>Instructions</Typography>
        <div className='instructions flex-centered-column'>
          {drink.instructions.map(step => {
            return step && (
              <div className='step flex-centered-container-vr' key={step}>
                <BubbleChartOutlinedIcon color='secondary' />
                <span>{step}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
