import React, { useEffect, useState } from 'react';
import Values from 'values.js';
import ColorCard from '../components/colorgen/ColorCard';
import '../styles/ColorGen.scss';
import { Typography } from '@mui/material';


export default function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState<Values[]>([])

  useEffect(() => {
    let colors = new Values('#240593').all(10)
    setList(colors)
  }, [])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setColor(e.target.value)
  }


  return (
    <>
      <section className='colorgen-container flex-centered-container'>
        <Typography variant='h3' className='text-center title'>Color Generator</Typography>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={handleChange} placeholder='#240593'
            className={`${error ? 'error' : null}`} />
          <button className='btn' type='submit'>Submit</button>
        </form>
        <span className='error-text'>
          {error && (!color ? 'Please Enter a value' : 'Invalid Color')}
        </span>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <ColorCard key={index} {...color} hexColor={color.hex} />
        })}
      </section>
    </>
  )
}