import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputAnswer from '../index';
import { QuestionType } from '../../../types';

describe('InputAnswer Component', () => {
  test('renders correctly with default props', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InputAnswer onSubmit={onSubmit} lastAnswer="" questionType={QuestionType.Text} />
    );
    const inputField = getByPlaceholderText('Type your answer');
    expect(inputField).toBeTruthy();

    const submitButton = getByText('Submit');
    expect(submitButton).toBeTruthy();
  });

  test('renders number input correctly', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText } = render(
      <InputAnswer onSubmit={onSubmit} lastAnswer="" questionType={QuestionType.Number} />
    );
    const inputField = getByPlaceholderText('0');
    expect(inputField).toBeTruthy();
  });

  test('calls onSubmit with correct text when submit button is pressed', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InputAnswer onSubmit={onSubmit} lastAnswer="" questionType={QuestionType.Text} />
    );

    const inputField = getByPlaceholderText('Type your answer');
    fireEvent.changeText(inputField, 'Test Answer');
    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);

    expect(onSubmit).toHaveBeenCalledWith('Test Answer');
  });

  // Additional test cases can be added for different scenarios (e.g., testing with different question types and initial values)
});
