import React from 'react';
import styled from 'styled-components/native';
import {IOption} from '../../types';
import theme from '../../theme';

interface MultipleChoiceOptionsProps {
  options: IOption[];
  onSelect: (option: IOption) => void;
  selectedAnswer: string;
}

const OptionsContainer = styled.View`
  margin-top: 10px;
`;

const OptionButton = styled.TouchableOpacity<{selected: boolean}>`
  background-color: ${props =>
    props.selected ? theme.colors.azure : theme.colors.border};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const OptionLabel = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

const MultipleChoiceOptions: React.FC<MultipleChoiceOptionsProps> = ({
  options,
  onSelect,
  selectedAnswer,
}) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionButton
          key={option.id}
          onPress={() => onSelect(option)}
          selected={selectedAnswer ? selectedAnswer === option.value : false}>
          <OptionLabel>{option.label}</OptionLabel>
        </OptionButton>
      ))}
    </OptionsContainer>
  );
};

export default MultipleChoiceOptions;
