export interface IRule {
  id: string;
  conditions: {
    operator: ComparisonOperator;
    right_operand: string;
  }[];
}

export interface IOption {
  id: string;
  label: string;
  value: string;
}
interface BaseQuestion {
  id: string;
  type: QuestionType;
  title: string;
  nesting?: INestedQuestion[];
}

export interface INestedQuestion extends BaseQuestion {
  rule: IRule;
  question: IQuestion;
  options?: IOption[];
}

export interface IQuestion extends BaseQuestion {
  options?: IOption[];
}

export interface IAnswer {
  questionID: string;
  answerValue: string;
  answer_time: Date;
}

export interface QuestionsData {
  questions: IQuestion[];
}

// Enums for question types and operators
export enum QuestionType {
  Text = 'text',
  Number = 'number',
  MCQ = 'mcq',
}

export enum ComparisonOperator {
  GreaterThanOrEqual = 'GTE',
  LessThan = 'LT',
  Equal = 'EQ',
}
