import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HagaatyIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M6 6V18H9V15H15V18H18V6H15V9H9V6H6ZM9 12V9H15V12H9Z"
      fill="currentColor"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <HagaatyIcon />
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Hagaaty
          </h1>
        </div>
      </div>
    </header>
  );
}
