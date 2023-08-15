import { useState, useEffect } from 'react';
import { Quote } from '@shared/interface';
import QuoteBox from '@components/aniquote/QuoteBox';
import Selector from '@components/aniquote/Selector';
import '@styles/AniQuote.scss';


const randomUrl = 'https://animechan.vercel.app/api/random';
const byTitleUrl = 'https://animechan.vercel.app/api/quotes/anime?title=';
const byCharacterUrl = 'https://animechan.vercel.app/api/quotes/character?name=';


const AniQuote = () => {

  const [quote, setQuote] = useState<Quote>({ quote: '', character: '', anime: '' });
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (api: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(api);
      const data = await response.json() satisfies Quote;
      setQuote(data);
      setError(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(true)
    } finally {
      setIsLoading(false)
    }
  };

  const fetchRandom = () => fetchData(randomUrl);
  const fetchByAnime = (name: string) => fetchData(`${byTitleUrl}${name}`)
  const fetchByChar = (name: string) => fetchData(`${byCharacterUrl}${name}`)


  useEffect(() => { fetchData(randomUrl) }, []);

  return (
    <div className="aniquote-container full-viewport-height full-width flex-centered-column">
      <div className='main padding flex-centered-column'>
        <Selector />
        <QuoteBox
          quote={quote}
          error={error}
          isLoading={isLoading}
          fetchRandom={fetchRandom} />
      </div>
    </div>
  )
}

export default AniQuote