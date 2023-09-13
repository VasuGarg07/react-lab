import Banner from '../components/Banner'
import List from '../components/List'

const Home = () => {
  return (
    <>
      <Banner fetchUrl="https://api.themoviedb.org/3/trending/all/day" />
      <List
        title="Trending"
        fetchUrl="https://api.themoviedb.org/3/trending/all/day"
        quantityItems={20}
      />
      <List
        title="Top Rated Movies"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated"
        quantityItems={15}
        textLink="View All"
        linkPath="/movies/top_rated"
      />
      <List
        title="Top Rated series"
        fetchUrl="https://api.themoviedb.org/3/tv/top_rated"
        quantityItems={15}
        textLink="View All"
        linkPath="/series/top_rated"
      />
    </>
  )
}

export default Home