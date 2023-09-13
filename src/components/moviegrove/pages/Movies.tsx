import List from '../components/List'

const Movies = () => {
  return (
    <>
      <List
        title="Now Playing"
        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing`}
        textLink="View All"
        linkPath="/movies/now_playing"
        quantityItems={30}
      />
      <List
        title="Top Rated Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated`}
        textLink="View All"
        linkPath="/movies/top_rated"
        quantityItems={30}
      />
      <List
        title="Popular Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular`}
        textLink="View All"
        linkPath="/movies/popular"
        quantityItems={30}
      />
      <List
        title="Upcoming Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming`}
        textLink="View All"
        linkPath="/movies/upcoming"
        quantityItems={30}
      />
    </>
  )
}

export default Movies