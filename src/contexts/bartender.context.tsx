import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Drink } from "@shared/interface";
import Bartender from "@pages/Bartender";


const BartenderContext = createContext<any>(null);

const allDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const randomDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const getFavoritesFromLocalStorage = (): Drink[] => {
  let data = localStorage.getItem('favoriteDrinks');
  return data ? JSON.parse(data) : [];
}

export const BartenderProvider = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [favorites, setFavorites] = useState<Drink[]>(getFavoritesFromLocalStorage());

  const fetchDrinks = async (url: string) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url);
      const drinks: Drink[] = data.drinks.map((drink: any) => {
        const newDrink: Drink = {
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
          category: drink.strCategory,
          type: drink.strAlcoholic,
          glass: drink.strGlass,
          instructions: drink.strInstructions,
          ingredients: []
        }
        for (let i = 1; i <= 20; i++) {
          if (`strIngredient${i}` in drink && drink[`strIngredient${i}`]) {
            newDrink.ingredients.push(drink[`strIngredient${i}`]);
          }
        }
        return newDrink
      })
      setDrinks(drinks && drinks.length ? drinks : []);
    }
    catch (e) {
      console.log(e);
      setDrinks([])
    }
    setLoading(false);
  }

  useEffect(() => { fetchDrinks(allDrinksUrl) }, []);
  useEffect(() => {
    if (!searchTerm) return;
    fetchDrinks(`${allDrinksUrl}${searchTerm}`);
  }, [searchTerm]);

  const fetchRandomDrink = () => fetchDrinks(randomDrinkUrl);

  const addToFavorites = (idDrink: string) => {
    const drink = drinks.find((drink) => drink.id === idDrink);
    const alreadyFavorite = favorites.find((drink) => drink.id === idDrink);
    if (alreadyFavorite) return;

    if (drink) {
      const updatedFavorites = [...favorites, drink]
      setFavorites(updatedFavorites)
      localStorage.setItem("favoriteDrinks", JSON.stringify(updatedFavorites))
    }
  }

  const removeFromFavorites = (idDrink: string) => {
    const updatedFavorites = favorites.filter((drink) => drink.id !== idDrink);
    setFavorites(updatedFavorites)
    localStorage.setItem("favoriteDrinks", JSON.stringify(updatedFavorites))
  }

  return (
    <BartenderContext.Provider
      value={{ loading, drinks, setSearchTerm, fetchRandomDrink, favorites, addToFavorites, removeFromFavorites }}
    >
      <Bartender />
    </BartenderContext.Provider>
  )
}

// make sure use
export const useBartenderContext = () => {
  return useContext(BartenderContext)
}
