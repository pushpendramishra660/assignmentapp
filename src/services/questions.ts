import {api, ApiResponse, ApiError, Response} from '../config';
import Constants from '../constants';
import {QuestionsData, IAnswer} from '../types';

export const getQuestions = async (): Promise<ApiResponse<QuestionsData>> => {
  try {
    const response = await api.get<Response<QuestionsData>>(
      Constants.EndPoints.GET_QUESTIONS,
    );
    if (response.data) {
      return response as ApiResponse<QuestionsData>;
    } else {
      throw new Error('Invalid API response format');
    }
  } catch (error) {
    throw error as ApiError;
  }
};

export const saveAnswers = async (answers: IAnswer[]): Promise<ApiResponse> => {
  try {
    const answersArray = answers.map(ans => {
      return {
        question_id: ans.questionID,
        answer_value: ans.answerValue,
        answer_time: ans.answer_time,
      };
    });
    const response = await api.post<Response>(
      Constants.EndPoints.SAVE_ANSWERS,
      answersArray,
    );
    if (response.status === 200) {
      return response;
    } else {
      throw new Error('Invalid API response format');
    }
  } catch (error) {
    throw error as ApiError;
  }
};
