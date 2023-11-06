import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IQuestion, IAnswer } from "../../types/questionsTypes";
import theme from "../../theme";

const OptionTopContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

const OptionContainer = styled.View<{ selected: boolean }>`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  background-color: ${theme.colors.brightGray};
  border-radius: 5px;
  width: 100%;
`;

const VerticalLine = styled.View`
  background-color: ${theme.colors.tuftsBlue};
  height: 20px;
  width: 2px;
`;

const OptionText = styled.Text<{ selected: boolean }>`
  color: ${theme.colors.japaneseIndigo};
  font-size: 16px;
  margin-left: 10px;
`;

interface QuestionProps {
  option: IQuestion;
  isParent: boolean;
  selectedOption: IAnswer | undefined;
  onSelectOption: () => void;
}

const Question: React.FC<QuestionProps> = ({
  option,
  selectedOption,
  onSelectOption,
  isParent,
}) => {
  const isSelected =
    selectedOption &&
    "questionID" in selectedOption &&
    selectedOption.questionID === option.id;

  return (
    <TouchableOpacity onPress={onSelectOption} activeOpacity={0.7}>
      <OptionTopContainer>
        {!isParent && <VerticalLine />}
        <OptionContainer selected={isSelected!}>
          {isSelected ? (
            <Icon
              testID="selected-icon"
              name="check-circle-outline"
              size={24}
              color={theme.colors.limeGreen}
            />
          ) : (
            <Icon
              testID="selected-icon"
              name="checkbox-blank-circle-outline"
              size={24}
              color={theme.colors.japaneseIndigo}
            />
          )}
          <OptionText selected={isSelected!}>{option.title}</OptionText>
        </OptionContainer>
      </OptionTopContainer>
    </TouchableOpacity>
  );
};

export default Question;
