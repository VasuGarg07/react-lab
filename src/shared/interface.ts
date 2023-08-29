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
export interface Drink {
  id: string,
  name: string,
  image: string,
  category: string,
  type: string,
}

export interface DrinkInfo extends Drink {
  glass: string,
  instructions: string[],
  ingredients: string[]
}

// Cookbook
export interface Dish {
  id: string,
  name: string,
  image: string,
  category: string,
  area: string,
}

export interface DishInfo extends Dish {
  tags: string,
  instructions: string[],
  ingredients: string[],
  source?: string,
  youtube?: string
}

// Budget Buddy
export enum ExpenseType {
  Housing = 'Housing',
  Transportation = 'Transportation',
  Food = 'Food',
  Utilities = 'Utilities',
  Clothing = 'Clothing',
  Medical = 'Medical/Healthcare',
  Insurance = 'Insurance',
  Supplies = 'Household Items/Supplies',
  Entertainment = 'Entertainment',
  Personal = 'Personal',
}

export interface Transaction {
  id: string,
  amount: number,
  date: string,
  label: string,
  type: ExpenseType
}

export enum ReducerActions {
  ADD,
  DELETE,
  CHANGE,
  ADD_MULTIPLE
}

export type Action =
  | { type: ReducerActions.ADD; item: Transaction }
  | { type: ReducerActions.CHANGE; item: Transaction }
  | { type: ReducerActions.DELETE; item: Transaction }
  | { type: ReducerActions.ADD_MULTIPLE; items: Transaction[] };

export interface Aggregate {
  type: string,
  amount: number
}

// Mortage Calculator
export interface MortageData {
  homeValue: number,
  downPayment: number,
  loanAmount: number,
  loanTerm: number,
  interestRate: number
}