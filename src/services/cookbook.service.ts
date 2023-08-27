import { Dish, DishInfo } from "@shared/interface";
import axios from "axios";
import { LoaderFunctionArgs } from "react-router-dom";

const BaseUrl = 'https://www.themealdb.com/api/json/v1/1/'

export const dishInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = params.dishId ? `${BaseUrl}lookup.php?i=${params.dishId}` : `${BaseUrl}random.php`;

  const { data } = await axios.get(url);

  console.log(data)

  const dish: DishInfo = {
    id: data.meals[0].idMeal,
    name: data.meals[0].strMeal,
    image: data.meals[0].strMealThumb,
    category: data.meals[0].strCategory,
    area: data.meals[0].strArea,
    tags: data.meals[0].strTags,
    source: data.meals[0].strSource,
    youtube: data.meals[0].strYoutube,

    instructions: data.meals[0].strInstructions.replace(/[0-9]\./g, '')
      .replace(/STEP\s[0-9]/g, '')
      .split('.'),
    ingredients: [],
  }
  console.log(dish)

  for (let i = 1; i <= 20; i++) {
    if (data.meals[0][`strIngredient${i}`]) {
      dish.ingredients.push(`${data.meals[0][`strMeasure${i}`]} ${data.meals[0][`strIngredient${i}`]}`);
    }
  }

  return dish
}

const fetchDishes = async (url: string) => {
  const { data } = await axios.get(url);
  const dishes: Dish[] = data.meals.map((meal: any) => {
    return {
      id: meal.idMeal,
      name: meal.strMeal,
      image: meal.strMealThumb,
      // category: meal.strCategory,
      // area: meal.strArea,
    }
  })
  return dishes
}

export const searchDishLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}search.php?s=${params.searchTerm}`;
  const dishes = await fetchDishes(url)
  const title = `Found ${dishes.length} results for "${params.searchTerm}"...`;
  return { title, dishes }
}

export const categoryDishes = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}filter.php?c=${params.category}`;
  const dishes = await fetchDishes(url)
  const title = `Found ${dishes.length} dishes in "${params.category}"...`;
  return { title, dishes }
}

export const areaDishes = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}filter.php?a=${params.area}`;
  const dishes = await fetchDishes(url)
  const title = `Found ${dishes.length} "${params.area}" dishes...`;
  return { title, dishes }
}


export const fetchCategories = async () => {
  const { data } = await axios.get(`${BaseUrl}list.php?c=list`);
  const tags: string[] = data.meals.map((meal: any) => meal.strCategory)
  return { key: 'category', title: 'Select dish category!', tags }
}

export const fetchAreas = async () => {
  const { data } = await axios.get(`${BaseUrl}list.php?a=list`);
  const tags: string[] = data.meals.map((meal: any) => meal.strArea)
  return { key: 'area', title: 'Browse through regions...', tags }
}

// export const fetchIngredients = async () => {
//   const { data } = await axios.get(`${BaseUrl}list.php?i=list`);
//   const tags: string[] = data.meals.map((meal: any) => meal.strIngredient)
//   return tags
// }