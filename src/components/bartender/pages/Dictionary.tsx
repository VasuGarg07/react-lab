import { Button } from '@mui/material';
import { Drink } from '@shared/interface';
import { Utils } from '@shared/utils';
import '@styles/foodmenu/Dictionary.scss';
import { useEffect, useState } from 'react';
import DrinkGrid from './DrinkGrid';
import { alphabetDrinks } from '@services/bartender.service';

const CHARS = Utils.getAlphabets();


const Dictionary = () => {

  const [currentChar, setCurrentChar] = useState(CHARS[0]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [_, setLoading] = useState(false)


  async function fetchDrinks(char: string) {
    setLoading(true);
    try {
      const { title, drinks } = await alphabetDrinks(char)
      setTitle(title);
      setDrinks(drinks);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false)
    }
  }

  const handleSelect = (char: string) => {
    setCurrentChar(char);
    fetchDrinks(char)
  }

  useEffect(() => { fetchDrinks(currentChar) }, [currentChar])

  return (
    <>
      <div className='full-width flex-centered-container padding keys'>
        {CHARS.map(char => {
          return <Button
            key={char}
            variant={`${currentChar == char ? 'contained' : 'outlined'}`}
            color='warning'
            size='small'
            className='key'
            children={char.toUpperCase()}
            onClick={() => handleSelect(char)}
          />
        })}
      </div>
      {!error && title && drinks && < DrinkGrid title={title} drinks={drinks} />}
    </>
  )
}

export default Dictionary