import { Grid, Paper, Typography, styled } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import '@styles/foodmenu/FoodGrid.scss';

interface Props {
  title: string,
  list: string[],
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TypeGrid = () => {
  const { title, list } = useLoaderData() as Props;
  return (
    <section className='foodgrid-container'>
      <Typography variant="h5" component="div">{title}</Typography>
      <Grid container spacing={{ md: 4, sm: 3, xs: 3 }} className='drinks-panel'>
        {list.map((item: string) => {
          return (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Item className='flex-centered-column'>
                {item}
              </Item>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default TypeGrid