import SearchIcon from '@mui/icons-material/Search';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useBartenderContext } from '@contexts/bartender.context';
import '@styles/foodmenu/FoodSearch.scss';

const Search = () => {
  const { setSearchTerm, fetchRandomDrink } = useBartenderContext();
  const [text, setText] = useState('')

  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchTerm(text || '')
  }

  const handleRandomDrink = () => {
    setSearchTerm('')
    setText('')
    fetchRandomDrink()
  }


  return (
    <form onSubmit={handleSubmit} className='search-container flex-centered-container-vr'>
      <input className='input' type="text"
        placeholder='Looking for a drink?' onChange={handleChange} />
      <Button type="submit" variant='contained' color='error' size='small'
        disableElevation startIcon={<SearchIcon />}>
        <span className='btn-text'>Search Drink</span>
      </Button>
      <Button variant='outlined' color='error' size='small'
        startIcon={<StarOutlineRoundedIcon />} onClick={handleRandomDrink}>
        <span className='btn-text'>Surprise Me !</span>
      </Button>
    </form>
  )
}

export default Search