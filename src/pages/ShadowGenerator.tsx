import '../styles/ShadowGenerator.scss'
import Container from '../components/shadowgen/Container';
import Header from '../components/shadowgen/Header';

export default function ShadowGenerator() {
  return (
    <>
      <Header />
      <div className='mainApp'>
        <Container />
      </div>
    </>
  )
}