import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MultipleChoiceOptions from '../index';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

describe('MultipleChoiceOptions Component', () => {
  test('renders options correctly', () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <MultipleChoiceOptions options={options} onSelect={onSelect} selectedAnswer="" />
    );

    options.forEach(option => {
      const optionElement = getByText(option.label);
      expect(optionElement).toBeTruthy();
    });
  });

  test('calls onSelect with correct option when an option is pressed', () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <MultipleChoiceOptions options={options} onSelect={onSelect} selectedAnswer="" />
    );

    fireEvent.press(getByText('Option 2'));

    expect(onSelect).toHaveBeenCalledWith(options[1]);
  });


});
