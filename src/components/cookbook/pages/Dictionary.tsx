import { Dish } from '@shared/interface';
import { Utils } from '@shared/utils';
import '@styles/foodmenu/Dictionary.scss';
import { useEffect, useState } from 'react';
import { alphabetDishes } from '@services/cookbook.service';
import DishGrid from './DishGrid';
import { Button } from '@mui/material';

const CHARS = Utils.getAlphabets();


const Dictionary = () => {

  const [currentChar, setCurrentChar] = useState(CHARS[0]);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [_, setLoading] = useState(false)


  async function fetchDishes(char: string) {
    setLoading(true);
    try {
      const { title, dishes } = await alphabetDishes(char)
      setTitle(title);
      setDishes(dishes);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false)
    }
  }

  const handleSelect = (char: string) => {
    setCurrentChar(char);
    fetchDishes(char)
  }

  useEffect(() => {
    fetchDishes(currentChar);
    console.log(title, dishes)
  }, [currentChar])

  return (
    <>
      <div className='full-width flex-centered-container padding keys'>
        {CHARS.map(char => {
          return <Button
            key={char}
            variant={`${currentChar == char ? 'contained' : 'outlined'}`}
            color='success'
            size='small'
            className='key'
            children={char.toUpperCase()}
            onClick={() => handleSelect(char)}
          />
        })}
      </div>
      {!error && title && dishes && <DishGrid title={title} dishes={dishes} />}
    </>
  )
}

export default Dictionary