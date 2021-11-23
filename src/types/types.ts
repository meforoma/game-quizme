export interface DieType {
  value: number,
  isHeld: boolean,
  id: string,
}

export interface Question {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  'correct_answer': string,
  'incorrect_answers': string[],
}
