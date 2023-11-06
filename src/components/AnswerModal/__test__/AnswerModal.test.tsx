import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AnswerModal from '../index';
import { Text } from 'react-native';

describe('AnswerModal Component', () => {
  const onCloseMock = jest.fn();

  it('renders modal content correctly', () => {
    const { getByText } = render(
      <AnswerModal visible={true} questionTitle="Sample Question" onClose={onCloseMock}>
        <Text>Modal Content</Text>
      </AnswerModal>
    );
    expect(getByText('Sample Question')).toBeDefined();
    expect(getByText('Modal Content')).toBeDefined();
  });

  it('does not render modal content when not visible', () => {
    const { queryByText } = render(
      <AnswerModal visible={false} questionTitle="Sample Question" onClose={onCloseMock}>
        <Text>Modal Content</Text>
      </AnswerModal>
    );
    expect(queryByText('Sample Question')).toBeNull();
    expect(queryByText('Modal Content')).toBeNull();
  });

});
