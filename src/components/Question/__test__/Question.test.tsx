import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Question from '../index';
import {IQuestion,QuestionType,IAnswer} from '../../../types';

const mockQuestion:IQuestion = {
  id: '1',
  title: 'Sample Question',
  type:QuestionType.Text
};

const mockSelectedOption:IAnswer = {
  questionID: '1',
  answerValue: 'Sample Answer',
  answer_time: new Date()
};

describe('Question Component', () => {
  test('renders question correctly', () => {
    const onSelectOption = jest.fn();
    const { getByText } = render(
      <Question option={mockQuestion} selectedOption = {undefined} onSelectOption={onSelectOption} isParent={false} />
    );

    const questionText = getByText('Sample Question');
    expect(questionText).toBeTruthy();
  });

  test('renders selected option correctly', () => {
    const onSelectOption = jest.fn();
    const { getByTestId } = render(
      <Question option={mockQuestion} selectedOption={mockSelectedOption} onSelectOption={onSelectOption} isParent={false} />
    );

    const selectedOptionIcon = getByTestId('selected-icon');
    expect(selectedOptionIcon).toBeTruthy();
  });

  test('calls onSelectOption when question is pressed', () => {
    const onSelectOption = jest.fn();
    const { getByText } = render(
      <Question option={mockQuestion} selectedOption={undefined} onSelectOption={onSelectOption} isParent={false} />
    );

    fireEvent.press(getByText('Sample Question'));
    expect(onSelectOption).toHaveBeenCalled();
  });

});
