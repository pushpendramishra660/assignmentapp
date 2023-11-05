import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Alert} from 'react-native';
import {
  Questionnaire,
  InputAnswer,
  MultipleChoiceOptions,
  AnswerModal,
} from '../components';
import {getQuestions, saveAnswers} from '../services';
import {IQuestion, IAnswer, QuestionType, IOption} from '../types';
import theme from '../theme';
import {HomeScreenProps} from '../types';
import {useDeepLinking} from '../hooks';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
`;
const SubmitButton = styled.Button``;

const Home: React.FC<HomeScreenProps> = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<IAnswer[]>([]);
  const [nestedQuestion, setNestedQuestion] = useState<IQuestion | null>(null);
  useDeepLinking();
  const handleAnswerModal = (selectedQuestion: IQuestion) => {
    setNestedQuestion(selectedQuestion);
  };

  const handleAnswerSubmit = (questionID: string, answerValue: string) => {
    const filteredQuestion = questions.filter(q => q.id === questionID);
    let nestedQuestions: string[] = [];
    if (filteredQuestion.length > 0 && filteredQuestion[0].nesting) {
      nestedQuestions = filteredQuestion[0].nesting.map(
        item => item.question.id,
      );
    }
    const updatedAnswers = selectedAnswers.filter(
      answer => !nestedQuestions.includes(answer.questionID),
    );

    const existingAnswerIndex = selectedAnswers.findIndex(
      answer => answer.questionID === questionID,
    );

    // If the answer exists, update it; otherwise, add a new answer
    if (existingAnswerIndex !== -1) {
      updatedAnswers[existingAnswerIndex] = {
        ...updatedAnswers[existingAnswerIndex],
        answerValue,
        answer_time: new Date(),
      };
    } else {
      const newAnswer: IAnswer = {
        questionID,
        answerValue,
        answer_time: new Date(),
      };
      updatedAnswers.push(newAnswer);
    }
    setSelectedAnswers(updatedAnswers);

    setNestedQuestion(null);
  };

  useEffect(() => {
    fetchQuestionList();
  }, []);

  const fetchQuestionList = () => {
    getQuestions()
      .then(res => {
        setQuestions(res.data.questions);
      })
      .catch(error => {
        console.error('Error fetching questions:', JSON.stringify(error));
      });
  };

  const closeModal = () => {
    setNestedQuestion(null);
  };

  const renderNestedQuestion = () => {
    if (nestedQuestion) {
      switch (nestedQuestion.type) {
        case QuestionType.Text:
        case QuestionType.Number:
          return (
            <InputAnswer
              questionType={nestedQuestion.type}
              lastAnswer={
                selectedAnswers.filter(
                  ans => ans.questionID === nestedQuestion.id,
                )[0]?.answerValue
              }
              onSubmit={text => {
                handleAnswerSubmit(nestedQuestion.id, text);
              }}
            />
          );
        case QuestionType.MCQ:
          return (
            <MultipleChoiceOptions
              selectedAnswer={
                selectedAnswers.filter(
                  ans => ans.questionID === nestedQuestion.id,
                )[0]?.answerValue
              }
              options={nestedQuestion.options || []}
              onSelect={(option: IOption) => {
                handleAnswerSubmit(nestedQuestion.id, option.value);
              }}
            />
          );
        default:
          return null;
      }
    }
    return null;
  };

  const handleSubmit = () => {
    if (selectedAnswers.length > 0) {
      saveAnswers(selectedAnswers)
        .then(() => {
          Alert.alert('Alert', 'Answer saved successfully.');
        })
        .catch(error => {
          console.error('Error fetching questions:', JSON.stringify(error));
        });
    }
  };
  return (
    <Container>
      <Questionnaire
        questions={questions}
        onSelectOption={handleAnswerModal}
        selectedAnswers={selectedAnswers}
      />
      <SubmitButton title="Submit" onPress={handleSubmit} />
      <AnswerModal
        onClose={closeModal}
        questionTitle={nestedQuestion && nestedQuestion.title}
        visible={nestedQuestion !== null}>
        {renderNestedQuestion()}
      </AnswerModal>
    </Container>
  );
};

export default Home;
