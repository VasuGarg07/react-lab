import { Card, CardActionArea, Grid, Typography } from '@mui/material';
import { Utils } from '@shared/utils';
import '@styles/foodmenu/FoodGrid.scss';
import { useLoaderData, useNavigate } from 'react-router-dom';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
interface Props {
  key: string,
  title: string,
  tags: string[],
}

const TypeGrid = () => {
  const { key, title, tags } = useLoaderData() as Props;
  const navigate = useNavigate();

  // const imgSrc = (tag: string) => {
  //   return key == 'category' ? `/food-category/${tag.toLocaleLowerCase()}.jpg` : `/food-region/${tag.toLocaleLowerCase()}.jpeg`
  // }



  const handleClick = (tag: string) => navigate(`/cookbook/${key.toLocaleLowerCase()}/${tag.toLocaleLowerCase()}`)

  const backgrounds = Utils.generateRandomColor(tags.length)
  return (
    <section className='foodgrid-container'>
      <Typography className='page-title' variant="h4" gutterBottom>{title}</Typography>
      <Grid container spacing={{ md: 3, xs: 2 }} className='drinks-panel'>
        {tags.map((item: string, index: number) => (
          <Grid item key={item} xs={12} sm={6} md={4}>
            <Card className='grid-item'
              style={{ background: `${backgrounds[index]}` }}
            // style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${imgSrc(item)})` }}
            >
              <CardActionArea onClick={() => handleClick(item)}>
                <div className='flex-centered-container padding'>
                  <RamenDiningOutlinedIcon fontSize='large' />
                  <Typography className='item-text' variant='body1' noWrap align='center'>{item}</Typography>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section >
  )
}

export default TypeGrid