import {IAnswer, ComparisonOperator, INestedQuestion} from '../types';

export const validateNestedQuestion = (
  nested: INestedQuestion,
  selectedAnswer: IAnswer | undefined,
) => {
  if (!selectedAnswer) {
    return false;
  }

  const {operator, right_operand: rightOperand} = nested.rule.conditions[0];

  const selectedAnswerValue = parseInt(
    selectedAnswer.answerValue.toString(),
    10,
  );

  switch (operator) {
    case ComparisonOperator.GreaterThanOrEqual:
      return selectedAnswerValue >= parseInt(rightOperand, 10);
    case ComparisonOperator.LessThan:
      return selectedAnswerValue < parseInt(rightOperand, 10);
    case ComparisonOperator.Equal:
      return isNaN(selectedAnswerValue)
        ? selectedAnswer.answerValue === rightOperand
        : selectedAnswerValue === parseInt(rightOperand, 10);
    default:
      return false;
  }
};
