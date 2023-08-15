import SearchIcon from '@mui/icons-material/Search';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useCookBookContext } from '@contexts/cookboox.context';
import '@styles/foodmenu/FoodSearch.scss';

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useCookBookContext();
  const [text, setText] = useState('')

  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchTerm(text || '')
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }


  return (
    <form onSubmit={handleSubmit} className='search-container flex-centered-container-vr'>
      <input className='input' type="text"
        placeholder='Looking for a meal?' onChange={handleChange} />
      <Button type="submit" variant='contained' color='success' size='small'
        disableElevation startIcon={<SearchIcon />}>
        <span className='btn-text'>Search Meal</span>
      </Button>
      <Button variant='outlined' color='success' size='small'
        startIcon={<StarOutlineRoundedIcon />} onClick={handleRandomMeal}>
        <span className='btn-text'>Surprise Me !</span>
      </Button>
    </form>
  )
}

export default Search