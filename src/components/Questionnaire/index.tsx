import React from 'react';
import styled from 'styled-components/native';
import Question from '../Question';
import {IQuestion, IAnswer} from '../../types/questionsTypes';
import {validateNestedQuestion} from '../../helper';

const QuestionContainer = styled.View`
  margin: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const Questionnaire: React.FC<{
  questions: IQuestion[];
  onSelectOption: (parentQuestion: IQuestion) => void;
  selectedAnswers: IAnswer[];
}> = ({questions, onSelectOption, selectedAnswers}) => {
  return (
    <QuestionContainer>
      {questions.map(option => {
        const selectedAnswer =
          selectedAnswers.find(
            answer => answer.questionID === option.id && answer.answerValue,
          ) || undefined; // Initialize with undefined

        if (!selectedAnswer || !option.nesting) {
          return (
            <Question
              isParent
              key={option.id}
              option={option}
              selectedOption={selectedAnswer}
              onSelectOption={() => {
                onSelectOption(option);
              }}
            />
          );
        }

        const nestedQuestionToShow = option.nesting.find(nested =>
          validateNestedQuestion(nested, selectedAnswer),
        );

        if (nestedQuestionToShow) {
          return (
            <React.Fragment key={option.id}>
              <Question
                isParent
                option={option}
                selectedOption={selectedAnswer}
                onSelectOption={() => onSelectOption(option)}
              />
              <Question
                isParent={false}
                option={nestedQuestionToShow.question}
                selectedOption={
                  selectedAnswers.find(
                    answer =>
                      answer.questionID === nestedQuestionToShow.question.id,
                  ) || undefined
                }
                onSelectOption={() => {
                  onSelectOption(nestedQuestionToShow.question);
                }}
              />
            </React.Fragment>
          );
        }

        return (
          <Question
            isParent
            key={option.id}
            option={option}
            selectedOption={selectedAnswer}
            onSelectOption={() => onSelectOption(option)}
          />
        );
      })}
    </QuestionContainer>
  );
};

export default Questionnaire;
