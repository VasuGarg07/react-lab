import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Meal } from "@shared/interface";
import CookBook from '@pages/Cookbook';

const CookBookContext = createContext<any>(null);

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const getFavoritesFromLocalStorage = (): Meal[] => {
  let data = localStorage.getItem('favoriteMeals');
  return data ? JSON.parse(data) : [];
}

export const CookBookProvider = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [favorites, setFavorites] = useState<Meal[]>(getFavoritesFromLocalStorage());

  const fetchMeals = async (url: string) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url);
      const meals: Meal[] = data.meals.map((meal: any) => {
        const newMeal: Meal = {
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          category: meal.strCategory,
          area: meal.strArea,
          tags: meal.strTags,
          instructions: meal.strInstructions,
          source: meal.strSource,
          ingredients: []
        }
        for (let i = 1; i <= 20; i++) {
          if (`strIngredient${i}` in meal && meal[`strIngredient${i}`]) {
            newMeal.ingredients.push(meal[`strIngredient${i}`]);
          }
        }
        return newMeal
      })
      setMeals(meals && meals.length ? meals : []);
    }
    catch (e) {
      console.log(e);
      setMeals([])
    }
    setLoading(false);
  }

  useEffect(() => { fetchMeals(allMealsUrl) }, []);
  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  const fetchRandomMeal = () => fetchMeals(randomMealUrl);

  const addToFavorites = (idMeal: string) => {
    const meal = meals.find((meal) => meal.id === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.id === idMeal);
    if (alreadyFavorite) return;

    if (meal) {
      const updatedFavorites = [...favorites, meal]
      setFavorites(updatedFavorites)
      localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavorites))
    }
  }

  const removeFromFavorites = (idMeal: string) => {
    const updatedFavorites = favorites.filter((meal) => meal.id !== idMeal);
    setFavorites(updatedFavorites)
    localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavorites))
  }

  return (
    <CookBookContext.Provider
      value={{ loading, meals, setSearchTerm, fetchRandomMeal, favorites, addToFavorites, removeFromFavorites }}
    >
      <CookBook />
    </CookBookContext.Provider>
  )
}

// make sure use
export const useCookBookContext = () => {
  return useContext(CookBookContext)
}
