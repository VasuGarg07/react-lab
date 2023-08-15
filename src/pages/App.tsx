import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Button, Card, CardActionArea, Grid, Typography } from '@mui/material';
import { CardInfo } from '../shared/interface';
import '../styles/App.scss';

const apps: CardInfo[] = [
  {
    image: '/thumbs/aniquote.png',
    name: 'Anime Quotes',
    url: '/aniquote',
  }
]

const AppCard = (app: CardInfo) => {
  return (
    <Card className='card'>
      <CardActionArea href={app.url}>
        <div className='full-width image-container padding'>
          <img className='full-width padding' src={app.image} alt="" />
          <Typography className='text-center app-name' variant='body1'>{app.name}</Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}


export default function App() {

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
              href="#showcase" startIcon={<ExploreOutlinedIcon />}>
              Start Exploring
            </Button>
          </div>
        </div>

        <div className="image-container">
          <img src="/images/homepage.png" alt="" />
        </div>
      </div>

      <div className="padding flex-centered-column showcase" id='showcase'>
        <Typography variant="h2" className='title' gutterBottom>
          My Projects
        </Typography>

        <Grid container spacing={3} className='padding' sx={{ maxWidth: 1000 }}>
          {apps.map(app => {
            return (
              <Grid item xs={4} key={app.name}>
                <AppCard {...app} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}


