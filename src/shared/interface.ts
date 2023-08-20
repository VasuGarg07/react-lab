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

// Periodic Table
export interface PeriodicElement {
  name: string,
  summary: string,
  symbol: string,
  category: string,
  number: number,
  source: string,
  appearance: string | null,
  atomic_mass: number,
  molar_heat: number | null,
  density: number | null,
  melt: number | null,
  boil: number | null,
  [key: string]: any
}