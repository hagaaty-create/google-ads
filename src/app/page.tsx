import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Features from '@/components/landing/features';
import Footer from '@/components/layout/footer';
import AssistantTrigger from '@/components/landing/assistant-trigger';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
      <AssistantTrigger />
    </div>
  );
}
