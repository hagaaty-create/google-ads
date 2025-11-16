'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering user questions about Hagaaty and Google Ads.
 *
 * It includes:
 * - `answerUserQuestions`: An exported function to trigger the flow.
 * - `AnswerUserQuestionsInput`: The input type for the `answerUserQuestions` function.
 * - `AnswerUserQuestionsOutput`: The output type for the `answerUserQuestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerUserQuestionsInputSchema = z.object({
  question: z.string().describe('The user question about Hagaaty or Google Ads.'),
});
export type AnswerUserQuestionsInput = z.infer<typeof AnswerUserQuestionsInputSchema>;

const AnswerUserQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type AnswerUserQuestionsOutput = z.infer<typeof AnswerUserQuestionsOutputSchema>;

export async function answerUserQuestions(input: AnswerUserQuestionsInput): Promise<AnswerUserQuestionsOutput> {
  return answerUserQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerUserQuestionsPrompt',
  input: {schema: AnswerUserQuestionsInputSchema},
  output: {schema: AnswerUserQuestionsOutputSchema},
  prompt: `You are a helpful assistant that answers questions about Hagaaty and Google Ads.

  Hagaaty is a service that helps users manage their Google Ads campaigns.

  Answer the following question:
  {{{question}}}`,
});

const answerUserQuestionsFlow = ai.defineFlow(
  {
    name: 'answerUserQuestionsFlow',
    inputSchema: AnswerUserQuestionsInputSchema,
    outputSchema: AnswerUserQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
