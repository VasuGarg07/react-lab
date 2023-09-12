import { Button, Typography } from '@mui/material';
import '@styles/foodmenu/FoodHomepage.scss';
import { useNavigate } from 'react-router-dom';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import AbcIcon from '@mui/icons-material/Abc';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='introduction-container drinks-cover flex-centered-column padding text-center'>
      <Typography variant='h2' className="title">Bartender's Best</Typography>

      <Typography variant='h4' className="tag-line">
        Savor the Art of Mixology
      </Typography>

      <Typography variant='body1' className="introduction" >
        Welcome to Bartender's Best, your gateway to a realm where cocktails transform into liquid poetry. Discover an array of meticulously curated recipes, each a masterpiece crafted from spirits, flavors, and creativity. Elevate your mixology journey, turning every pour into a memorable symphony of taste and style. Cheers to crafting perfection!
      </Typography>

      <div className='actions flex-centered-container padding'>

        <Button variant="contained"
          startIcon={<CategoryOutlinedIcon />}
          color='secondary'
          children="Explore Categories"
          onClick={() => navigate('category')}
        />

        <Button variant="contained"
          startIcon={<LanguageIcon />}
          color='secondary'
          children="Cockatail Types"
          onClick={() => navigate('type')}
        />

        <Button variant="contained"
          startIcon={<LiquorOutlinedIcon />}
          color='secondary'
          children="Cockatail Glasses"
          onClick={() => navigate('glass')}
        />

        <Button variant="contained"
          startIcon={<AbcIcon />}
          color='secondary'
          children="Alphabetical"
          onClick={() => navigate('alphabet')}
        />

        <Button variant="contained"
          startIcon={<StarBorderRoundedIcon />}
          color='secondary'
          children="Surprise Me !"
          onClick={() => navigate('random')}
        />
      </div>
    </div>
  )
}

export default Home