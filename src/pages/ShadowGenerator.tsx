import '@styles/ShadowGenerator.scss'
import Container from '@components/shadowgen/Container';
import { Typography } from '@mui/material';

export default function ShadowGenerator() {
  return (
    <>
      <div className='navbar padding'>
        <Typography variant="h4" className='app-name'>
          Shadow<span>Generator</span>
        </Typography>
      </div>
      <div className='mainApp'>
        <Container />
      </div>
    </>
  )
}