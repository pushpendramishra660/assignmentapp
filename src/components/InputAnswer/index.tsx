import React, {useState} from 'react';
import styled from 'styled-components/native';
import {QuestionType} from '../../types';
import theme from '../../theme';

interface InputAnswerProps {
  onSubmit: (text: string) => void;
  lastAnswer: string;
  questionType: QuestionType;
}

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const InputField = styled.TextInput`
  height: 40px;
  border-color: ${theme.colors.border};
  border-width: 1px;
  border-radius: 5px;
  margin-vertical: 10px;
  padding-horizontal: 8px;
  text-align: center;
  color:${theme.colors.japaneseIndigo};
`;

const SubmitButton = styled.Button``;

const InputAnswer: React.FC<InputAnswerProps> = ({
  onSubmit,
  lastAnswer,
  questionType,
}) => {
  const defaultAnswer =
    lastAnswer || '';

  const [text, setText] = useState(defaultAnswer);

  const handleInputChange = (value: string) => {
    setText(value);
  };

  const handleSubmit = () => {
    onSubmit(text);
  };

  return (
    <InputContainer>
      <InputField
        value={text}
        onChangeText={handleInputChange}
        placeholder={questionType === QuestionType.Number ? '0' : "Type your answer"}
        placeholderTextColor={theme.colors.japaneseIndigo}
      />
      <SubmitButton title="Submit" onPress={handleSubmit} />
    </InputContainer>
  );
};

export default InputAnswer;
