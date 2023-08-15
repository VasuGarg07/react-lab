export interface CardInfo {
  name: string,
  image: string,
  url: string
}

// Anime Quote 
export interface Quote {
  quote: string,
  character: string,
  anime: string
}

// Quiz App
export interface Question {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

// Bartender
export type Drink = {
  id: string,
  name: string,
  image: string,
  category: string,
  type: string,
  glass: string,
  instructions: string,
  ingredients: string[]
}

// Cookbook
export type Meal = {
  id: string,
  name: string,
  image: string,
  category: string,
  area: string,
  tags: string
  source: string,
  instructions: string,
  ingredients: string[]
}