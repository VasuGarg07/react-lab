import { Grid, Typography } from '@mui/material';
import { Drink } from '../../../shared/interface';
import DrinkCard from '../components/DrinkCard';
import '@styles/foodmenu/FoodGrid.scss';
import { useLoaderData } from 'react-router-dom';

interface Data {
  title: string,
  drinks: Drink[]
}

const DrinkGrid = (props: Partial<Data>) => {
  const { title, drinks } = props.title && props.drinks ? props : useLoaderData() as Data;

  if (drinks && drinks.length) {
    return (
      <section className='foodgrid-container'>
        <Typography className='page-title' variant="h4" gutterBottom> {title} </Typography>
        <Grid container spacing={{ md: 4, sm: 3, xs: 3 }} className='drinks-panel'>
          {drinks.map((drink: Drink) => {
            return (
              <Grid item key={drink.id} xs={6} sm={4}>
                <DrinkCard drink={drink} />
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
        <Typography variant="h6" className="message"> No Drinks Matched Your Search.</Typography>
      </div>
    )
  }
}

export default DrinkGrid