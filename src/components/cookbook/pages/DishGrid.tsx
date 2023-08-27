import { Grid, Typography } from '@mui/material';
import { Dish } from '../../../shared/interface';
import DishCard from '../components/DishCard';
import '@styles/foodmenu/FoodGrid.scss';
import { useLoaderData } from 'react-router-dom';

interface Data {
  title: string,
  dishes: Dish[]
}

const DishGrid = (props: Partial<Data>) => {
  const { title, dishes } = props.title && props.dishes ? props : useLoaderData() as Data;

  if (dishes && dishes.length) {
    return (
      <section className='foodgrid-container'>
        <Typography className='page-title' variant="h4" gutterBottom> {title} </Typography>
        <Grid container spacing={{ md: 4, sm: 3, xs: 3 }} className='drinks-panel'>
          {dishes.map((dish: Dish) => {
            return (
              <Grid item key={dish.id} xs={6} sm={4}>
                <DishCard dish={dish} />
              </Grid>
            )
          })}
        </Grid>
      </section>
    )
  } else {
    return (
      <div className='no-results text-center flex-centered-column'>
        <img src="/images/no-food.png" alt="no results found" />
        <Typography variant="h6" className="message"> No Dishes Matched Your Search.</Typography>
      </div>
    )
  }
}

export default DishGrid