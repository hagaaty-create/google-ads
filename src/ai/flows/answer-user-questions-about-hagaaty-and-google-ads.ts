'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering user questions about Hagaaty and Google Ads.
 *
 * It includes:
 * - `answerUserQuestions`: An exported function to trigger the flow.
 * - `AnswerUserQuestionsInput`: The input type for the `answerUserQuestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerUserQuestionsInputSchema = z.object({
  question: z.string().describe('The user question about Hagaaty or Google Ads.'),
});
export type AnswerUserQuestionsInput = z.infer<typeof AnswerUserQuestionsInputSchema>;

export const answerUserQuestions = ai.defineFlow(
  {
    name: 'answerUserQuestionsFlow',
    inputSchema: AnswerUserQuestionsInputSchema,
    outputSchema: z.string(),
    stream: true,
  },
  async (input, streamingCallback) => {
    const {stream, response} = ai.generateStream({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are a helpful assistant that answers questions about Hagaaty and Google Ads. Keep your answers concise and in Arabic.

  Hagaaty is a service that helps users manage their Google Ads campaigns.

  Answer the following question:
  ${input.question}`,
      streamingCallback,
    });

    let answer = '';
    for await (const chunk of stream) {
      answer += chunk.text;
    }
    await response;
    return answer;
  }
);
