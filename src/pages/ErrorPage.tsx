
import { Button, Typography } from '@mui/material'
import '@styles/Errorpage.scss';
import { useNavigate } from 'react-router-dom';


export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className='full-viewport-width full-viewport-height flex-centered-column padding error-page'>
      <div className='image-container'>
        <img src="/images/errorpage.png" alt="" />
      </div>

      <Typography variant="subtitle1" className='error-text text-center' gutterBottom>
        "Apologies, but it seems the page you're seeking has ventured into the digital unknown. Let's navigate back to familiar territory together. Feel free to explore more of our offerings in the meantime."
      </Typography>

      <Button onClick={() => navigate('')} color='error' variant='outlined' className='btn'>Go to Homepage</Button>
    </div>
  )
}
