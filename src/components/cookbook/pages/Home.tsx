import { Button, Typography } from '@mui/material';
import '@styles/foodmenu/FoodHomepage.scss';
import { useNavigate } from 'react-router-dom';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import AbcIcon from '@mui/icons-material/Abc';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='introduction-container dishes-cover flex-centered-column padding text-center'>
      <Typography variant='h2' className="title">COOK BOOK</Typography>

      <Typography variant='h4' className="tag-line">
        Crafting Culinary Adventures
      </Typography>

      <Typography variant='body1' className="introduction" >
        Welcome to Cook Book, where each page tells a tale of taste and togetherness. Explore a medley of recipes that transcend ingredients, creating symphonies on your plate. Embark on culinary adventures that blend tradition with innovation, enriching your journey through the world of flavors.
      </Typography>

      <div className='actions flex-centered-container padding'>

        <Button variant="contained"
          startIcon={<CategoryOutlinedIcon />}
          color='error'
          children="Explore Categories"
          onClick={() => navigate('/cookbook/category')}
        />

        <Button variant="contained"
          startIcon={<LanguageIcon />}
          color='error'
          children="Regional Meals"
          onClick={() => navigate('/cookbook/area')}
        />

        <Button variant="contained"
          startIcon={<AbcIcon />}
          color='error'
          children="Alphabetical"
          onClick={() => navigate('/cookbook/alphabet')}
        />

        <Button variant="contained"
          startIcon={<StarBorderRoundedIcon />}
          color='error'
          children="Surprise Me !"
          onClick={() => navigate('/cookbook/random')}
        />
      </div>
    </div>
  )
}

export default Home