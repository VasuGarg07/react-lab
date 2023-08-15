import { CircularProgress, Grid, Typography } from '@mui/material';
import { Meal } from '../../shared/interface';
import { useCookBookContext } from '@contexts/cookboox.context';
import MealCard from './MealCard';
import '@styles/foodmenu/FoodGrid.scss';

const Drinks = () => {
  const { loading, meals } = useCookBookContext();

  if (loading) {
    return (
      <div className='loading flex-centered-container'>
        <Typography variant="h6" component="div">Loading...</Typography>
        <CircularProgress color="secondary" />
      </div>
    )
  } else {
    if (meals && meals.length) {
      return (
        <section className='foodgrid-container'>
          <Grid container spacing={{ md: 4, sm: 3, xs: 3 }} className='drinks-panel'>
            {meals.map((meal: Meal) => {
              return (
                <Grid item key={meal.id}
                  xs={12} sm={6} md={4}
                >
                  <MealCard meal={meal} />
                </Grid>)
            })}
          </Grid>
        </section>
      )
    } else {
      return (
        <div className='loading text-center'>
          <Typography variant="h6" component="div"> No Meals Matched Your Search. Please Try Again. </Typography>
        </div>
      )
    }
  }

}

export default Drinks