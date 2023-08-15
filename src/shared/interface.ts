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

