import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-accent/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline text-foreground">
              إعلانات جوجل مع{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hagaaty
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              أطلق العنان لقوة إعلانات جوجل. نقدم لك المساعدة الذكية لإدارة
              حملاتك الإعلانية وتحقيق أفضل النتائج.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
