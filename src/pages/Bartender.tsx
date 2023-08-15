
import Drinks from '@components/bartender/Drinks';
import Favorites from '@components/bartender/Favorites';
import Search from '@components/bartender/Search';
import { useBartenderContext } from '@contexts/bartender.context';

export default function App() {

  const { favorites } = useBartenderContext()

  return (
    <main>
      <Search />
      {favorites && favorites.length > 0 && <Favorites favorites={favorites} />}
      <Drinks />
    </main>
  )
}