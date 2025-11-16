'use client';

import { useState } from 'react';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { VirtualAssistant } from './virtual-assistant';

export default function AssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        size="icon"
        aria-label="Open virtual assistant"
      >
        <Bot className="h-8 w-8" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] h-[70vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>المساعد الافتراضي</DialogTitle>
            <DialogDescription>
              اسأل أي شيء عن Hagaaty أو إعلانات جوجل.
            </DialogDescription>
          </DialogHeader>
          <VirtualAssistant />
        </DialogContent>
      </Dialog>
    </>
  );
}
