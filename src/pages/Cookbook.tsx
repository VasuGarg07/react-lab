
import Favorites from '@components/cookbook/Favorites';
import Meals from '@components/cookbook/Meals';
import Search from '@components/cookbook/Search';
import { useCookBookContext } from '@contexts/cookboox.context';

export default function App() {

  const { favorites } = useCookBookContext()

  return (
    <main>
      <Search />
      {favorites && favorites.length > 0 && <Favorites favorites={favorites} />}
      <Meals />
    </main>
  )
}