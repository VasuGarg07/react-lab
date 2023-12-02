import List from "../components/List"

const Series = () => {
  return (
    <>
      <List
        title="Top Rated Series"
        fetchUrl={`https://api.themoviedb.org/3/tv/top_rated`}
        textLink="View All"
        linkPath="/series/top_rated"
        quantityItems={30}
      />
      <List
        title="Popular Series"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular`}
        textLink="View All"
        linkPath="/series/popular"
        quantityItems={30}
      />
      <List
        title="Airing Today"
        fetchUrl={`https://api.themoviedb.org/3/tv/airing_today`}
        textLink="View All"
        linkPath="/series/airing"
        quantityItems={30}
      />
    </>
  )
}

export default Series