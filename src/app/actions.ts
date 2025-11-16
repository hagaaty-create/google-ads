
'use server';

import {
  answerUserQuestions,
  type AnswerUserQuestionsOutput,
} from '@/ai/flows/answer-user-questions-about-hagaaty-and-google-ads';

export async function askVirtualAssistant(
  question: string
): Promise<AnswerUserQuestionsOutput> {
  if (!question) {
    return { answer: 'عذراً، لم أستلم أي سؤال. الرجاء كتابة سؤالك.' };
  }
  try {
    const response = await answerUserQuestions({ question });
    return response;
  } catch (error) {
    console.error('Error in askVirtualAssistant:', error);
    return {
      answer:
        'عذراً، حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى لاحقاً.',
    };
  }
}
