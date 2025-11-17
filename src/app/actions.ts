'use server';

import { answerUserQuestions } from '@/ai/flows/answer-user-questions-about-hagaaty-and-google-ads';
import { ai } from '@/ai/genkit';

export async function askVirtualAssistant(
  question: string
): Promise<ReadableStream<Uint8Array> | { error: string }> {
  if (!question) {
    return { error: 'عذراً، لم أستلم أي سؤال. الرجاء كتابة سؤالك.' };
  }
  try {
    const { stream } = ai.generateStream({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are a helpful assistant that answers questions about Hagaaty and Google Ads. Keep your answers concise and in Arabic.

  Hagaaty is a service that helps users manage their Google Ads campaigns.

  Answer the following question:
  ${question}`,
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) {
              // We'll wrap each text chunk in a simple JSON object
              // This makes it easier to parse on the client
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
            }
          }
        } catch (e) {
            const errorMessage = 'عذراً، حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى لاحقاً.';
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: errorMessage })}\n\n`));
        } finally {
          controller.close();
        }
      },
    });

    return readableStream;

  } catch (error) {
    console.error('Error in askVirtualAssistant:', error);
    // This is a fallback for initial setup errors
    return {
      error:
        'عذراً، حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى لاحقاً.',
    };
  }
}
