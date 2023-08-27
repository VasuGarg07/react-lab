import { Button, Typography } from '@mui/material';
import { DishInfo } from '@shared/interface';
import '@styles/foodmenu/FoodDetails.scss';
import { useLoaderData, useNavigate } from 'react-router-dom';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';


export const DishDetails = () => {

  const navigate = useNavigate();

  const handleExternalUrl = (url: string) => {
    window.open(url, '_black')
  }

  const dish = useLoaderData() as DishInfo;

  return (
    <div className='full-width padding dish-container flex-centered-column'>
      <div className='section padding text-center'>
        <div className='image-container full-width'>
          <img src={dish.image} alt={dish.name} />
        </div>

        <Typography variant='h3' className='dish-name padding'>{dish.name}</Typography>

        <div className='actions flex-centered-container'>
          <Typography variant='button' className='sub-text'>
            Region: <span className='navlink' onClick={() => navigate(`/cookbook/area/${dish.area?.toLocaleLowerCase()}`)}>
              {dish.area}
            </span>
          </Typography>
          <Typography variant='button' className='sub-text'>
            Category: <span className='navlink' onClick={() => navigate(`/cookbook/category/${dish.category?.toLocaleLowerCase()}`)}>
              {dish.category}
            </span>
          </Typography>
        </div>

        {/* <div className='tags flex-centered-container'>
          {dish.tags.map(tag => <div key={tag} className='tag'>{tag}</div>)}
        </div> */}

        <div className='actions flex-centered-container padding'>
          {dish.source &&
            <Button variant="outlined"
              startIcon={<InfoOutlinedIcon />}
              color='inherit'
              children="More Info"
              onClick={() => handleExternalUrl(dish.source!)}
            />}
          {dish.youtube &&
            <Button variant="contained"
              disableElevation
              startIcon={<SmartDisplayIcon />}
              color='error'
              children="Watch Video"
              onClick={() => handleExternalUrl(dish.youtube!)}
            />}
        </div>
      </div>
      <div className='section padding'>
        <Typography variant='h4' className='section-name'>Ingredients</Typography>
        <div className='ingredients flex-centered-container-vr'>
          {dish.ingredients.map((ingredient, index) => <div className='ingredient' key={index}>{ingredient}</div>)}
        </div>
      </div>
      <div className='section padding'>
        <Typography variant='h4' className='section-name'>Instructions</Typography>
        <div className='instructions flex-centered-column'>
          {dish.instructions.map(step => {
            return step && (
              <div className='step flex-centered-container-vr' key={step}>
                <BubbleChartOutlinedIcon color='error' />
                <span>{step}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
