import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <Banner fetchUrl="https://api.themoviedb.org/3/trending/all/day" /></>
  )
}

export default Home