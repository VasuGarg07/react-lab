import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Button, Card, CardActionArea, Grid, Typography } from '@mui/material';
import { Apps } from '@shared/apps';
import { CardInfo } from '@shared/interface';
import { defaultTiltOptions } from '@shared/utils';
import '@styles/App.scss';
import { useRef } from 'react';
import { Tilt } from 'react-tilt';



const AppCard = (app: CardInfo) => {
  return (
    <Card className='card'>
      <CardActionArea href={app.url}>
        <div className='full-width image-container padding'>
          <Tilt options={defaultTiltOptions}>
            <img className='full-width' src={app.image} alt="" />
            <Typography className='text-center app-name text-ellipsis' variant='body1'>{app.name}</Typography>
          </Tilt>
        </div>
      </CardActionArea>
    </Card>

  );
}

export default function App() {

  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div className="flex-centered-container homepage">
        <div className="intro" >
          <Typography variant="h2" className='title' gutterBottom>
            React Lab
          </Typography>
          <Typography className='caption' variant="h6" gutterBottom>
            Explore my showcase of mini React web apps, where each click unveils creativity in code. Embark on an interactive journey that merges innovation with imagination.
          </Typography>
          <div className='full-width flex-centered-container-vr'>
            <Button className='button' variant="contained" size='large'
              startIcon={<ExploreOutlinedIcon />} onClick={handleClick}>
              Start Exploring
            </Button>
          </div>
        </div>

        <div className="image-container">
          <img src="/images/homepage.png" alt="" />
        </div>
      </div>

      <div className="padding flex-centered-column showcase" ref={ref}>
        <Typography variant="h2" className='title' gutterBottom>
          Beginner Projects
        </Typography>
        <Grid container spacing={3} className='padding' sx={{ maxWidth: 1000 }}>
          {Apps.Beginner.map(app => {
            return (
              <Grid item xs={6} sm={4} key={app.name}>
                <AppCard {...app} />
              </Grid>
            )
          })}
        </Grid>

        <Typography variant="h2" className='title' gutterBottom>
          Intermediate Projects
        </Typography>
        <Grid container spacing={3} className='padding' sx={{ maxWidth: 1000 }}>
          {Apps.Intermediate.map(app => {
            return (
              <Grid item xs={6} sm={4} key={app.name}>
                <AppCard {...app} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}


