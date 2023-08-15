import { CircularProgress, Grid, Typography } from '@mui/material';
import { Drink } from '@shared/interface';
import { useBartenderContext } from '@contexts/bartender.context';
import DrinkCard from './DrinkCard';
import '@styles/foodmenu/FoodGrid.scss';

const Drinks = () => {
  const { loading, drinks } = useBartenderContext();

  if (loading) {
    return (
      <div className='loading flex-centered-container'>
        <Typography variant="h6" component="div">Loading...</Typography>
        <CircularProgress color="secondary" />
      </div>
    )
  } else {
    if (drinks && drinks.length) {
      return (
        <section className='foodgrid-container'>
          <Grid container spacing={{ md: 4, sm: 3, xs: 3 }} className='drinks-panel'>
            {drinks.map((drink: Drink) => {
              return (
                <Grid item key={drink.id}
                  xs={12} sm={6} md={4}
                >
                  <DrinkCard drink={drink} />
                </Grid>)
            })}
          </Grid>
        </section>
      )
    } else {
      return (
        <div className='loading text-center'>
          <Typography variant="h6" component="div"> No Drinks Matched Your Search. Please Try Again. </Typography>
        </div>
      )
    }
  }

}

export default Drinks