import React from 'react';
import styled from 'styled-components/native';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import theme from '../../theme';

interface AnswerModalProps {
  visible: boolean;
  questionTitle: string | null;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.View`
  background-color: white;
  justify-content: center;
  align-item: center;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 40%;
`;

const Backdrop = styled.View`
  flex: 1;
  background-color: ${theme.colors.backdrop};
`;

const QuestionText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

const AnswerModal: React.FC<AnswerModalProps> = ({
  visible,
  questionTitle,
  onClose,
  children,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <Backdrop>
          <ModalContainer>
            <ModalContent>
              <QuestionText>{questionTitle}</QuestionText>
              {children}
            </ModalContent>
          </ModalContainer>
        </Backdrop>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AnswerModal;
