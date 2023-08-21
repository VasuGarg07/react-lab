import '@styles/ShadowGenerator.scss'
import Container from '@components/shadowgen/Container';

export default function ShadowGenerator() {
  return (
    <>
      <div className='app-name padding text-center'>
        CSS Shadow Generator
      </div>
      <div className='mainApp'>
        <Container />
      </div>
    </>
  )
}