
'use server';

import {
  answerUserQuestions
} from '@/ai/flows/answer-user-questions-about-hagaaty-and-google-ads';

export async function askVirtualAssistant(
  question: string
) {
  if (!question) {
    return { answer: 'عذراً، لم أستلم أي سؤال. الرجاء كتابة سؤالك.' };
  }
  try {
    const { stream } = await answerUserQuestions({ question });
    return stream;
  } catch (error) {
    console.error('Error in askVirtualAssistant:', error);
    return {
      answer:
        'عذراً، حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى لاحقاً.',
    };
  }
}
