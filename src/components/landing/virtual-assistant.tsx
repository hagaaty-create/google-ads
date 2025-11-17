'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { askVirtualAssistant } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const FormSchema = z.object({
  question: z.string().min(1, {
    message: 'الرجاء كتابة سؤال.',
  }),
});

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
};

export function VirtualAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'مرحباً! كيف يمكنني مساعدتك اليوم بخصوص Hagaaty أو إعلانات جوجل؟',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const userMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: data.question,
    };
    const assistantMessage: Message = {
      id: messages.length + 2,
      role: 'assistant',
      content: '',
    };
    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setIsLoading(true);
    form.reset();

    try {
      const stream = await askVirtualAssistant(data.question);
      if (typeof stream === 'object' && 'answer' in stream) {
        // Handle non-streamed error response
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessage.id ? { ...msg, content: stream.answer } : msg
          )
        );
        return;
      }
      
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let streamedContent = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const json = JSON.parse(line.substring(6));
              if (json.text) {
                streamedContent += json.text;
                setMessages(prev =>
                  prev.map(msg =>
                    msg.id === assistantMessage.id ? { ...msg, content: streamedContent } : msg
                  )
                );
              }
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (error) {
      const errorMessageContent = 'عذراً، حدث خطأ ما. الرجاء المحاولة مرة أخرى.';
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantMessage.id
            ? { ...msg, content: errorMessageContent }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[75%] rounded-lg p-3 text-sm',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                )}
              >
                <p>{message.content}</p>
                 {isLoading && message.role === 'assistant' && !message.content && (
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-3 w-3 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <Skeleton className="h-3 w-3 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <Skeleton className="h-3 w-3 rounded-full animate-bounce" />
                  </div>
                 )}
              </div>
              {message.role === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t bg-background p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-start space-x-2 rtl:space-x-reverse"
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="اكتب سؤالك هنا..."
                      {...field}
                      disabled={isLoading}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">إرسال</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
