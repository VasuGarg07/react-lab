
import { Drink, DrinkInfo } from "@shared/interface";
import axios from "axios";
import { LoaderFunctionArgs } from "react-router-dom";

const BaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const drinkInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = params.drinkId ? `${BaseUrl}lookup.php?i=${params.drinkId}` : `${BaseUrl}random.php`;

  const { data } = await axios.get(url);

  const drink: DrinkInfo = {
    id: data.drinks[0].idDrink,
    name: data.drinks[0].strDrink,
    image: data.drinks[0].strDrinkThumb,
    category: data.drinks[0].strCategory,
    type: data.drinks[0].strAlcoholic,
    glass: data.drinks[0].strGlass,

    instructions: data.drinks[0].strInstructions.replace(/[0-9]\./g, '')
      .replace(/STEP\s[0-9]/g, '')
      .split('.'),
    ingredients: [],
  }

  for (let i = 1; i <= 20; i++) {
    if (data.drinks[0][`strIngredient${i}`]) {
      drink.ingredients.push(`${data.drinks[0][`strMeasure${i}`]} ${data.drinks[0][`strIngredient${i}`]}`);
    }
  }

  return drink
}

const fetchDrinks = async (url: string) => {
  const { data } = await axios.get(url);
  const drinks: Drink[] = data.drinks ? data.drinks.map((drink: any) => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      category: drink.strCategory,
      type: drink.strAlcoholic,
    }
  }) : []
  return drinks
}

export const searchDrinkLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}search.php?s=${params.searchTerm}`;
  const drinks = await fetchDrinks(url)
  const title = `Found ${drinks.length} results for "${params.searchTerm}"...`;
  return { title, drinks }
}

export const alphabetDrinks = async (letter: string) => {
  const url = `${BaseUrl}search.php?f=${letter}`;
  const drinks = await fetchDrinks(url)
  const title = `Found ${drinks.length} drinks...`;
  return { title, drinks }
}

export const categoryDrinks = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}filter.php?c=${params.category}`;
  const drinks = await fetchDrinks(url)
  const title = `Found ${drinks.length} drinks in "${params.category}"...`;
  return { title, drinks }
}

export const typeDrinks = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}filter.php?a=${params.type}`;
  const drinks = await fetchDrinks(url)
  const title = `Found ${drinks.length} "${params.type}" drinks...`;
  return { title, drinks }
}

export const glassDrinks = async ({ params }: LoaderFunctionArgs) => {
  const url = `${BaseUrl}filter.php?g=${params.glass}`;
  const drinks = await fetchDrinks(url)
  const title = `Found ${drinks.length} "${params.glass}" drinks...`;
  return { title, drinks }
}

export const fetchDrinkCategories = async () => {
  const { data } = await axios.get(`${BaseUrl}list.php?c=list`);
  const tags: string[] = data.drinks.map((drink: any) => drink.strCategory)
  return { key: 'category', title: 'Select drink category!', tags }
}

export const fetchTypes = async () => {
  const { data } = await axios.get(`${BaseUrl}list.php?a=list`);
  const tags: string[] = data.drinks.map((drink: any) => drink.strAlcoholic)
  return { key: 'type', title: 'Select drink types!', tags }
}

export const fetchGlass = async () => {
  const { data } = await axios.get(`${BaseUrl}list.php?g=list`);
  const tags: string[] = data.drinks.map((drink: any) => drink.strGlass)
  return { key: 'glass', title: 'Savour in your favorite glass', tags }
}